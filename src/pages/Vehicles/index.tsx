import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { Button, Card } from '../../components'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../types/Vehicle'
import qs from 'qs'

function VehiclesPage() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([])
  const [page, setPage] = useState(1)
  // const [search, setSearch] = useState<string>('')

  const fetchVehicles = async () => {
    await api
      .get('/vehicles', {
        params: qs.stringify(page),
      })
      .then((response) => {
        if (response.status === 200) {
          return setVehicles(response.data.data)
        }
        console.log('Falha ao conectar com o servidor')
      })
      .catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    fetchVehicles()
  }, [])

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        {/* <Search placeholder="Search" value={'ola'} /> */}

        <Button to="/cadastro">Add new vehicle</Button>

        {vehicles.length > 0 &&
          vehicles.map((vehicle) => {
            return (
              <Card key={vehicle.id} title={vehicle.name}>
                <p>
                  Price:
                  {new Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }).format(
                    vehicle.price
                  )}
                </p>
                <p>Description: {vehicle.description}</p>
                <p>Year: {vehicle.year}</p>
              </Card>
            )
          })}

        {vehicles.length > 15 && <Button onClick={() => setPage(page + 1)}>1</Button>}
      </main>
    </div>
  )
}

export default VehiclesPage
