import { useEffect, useState } from 'react'
import { api } from '../../lib/api'
import { Button, Card } from '../../components'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../types/Vehicle'
import { useNavigate } from 'react-router-dom'
import qs from 'qs'

interface IMeta {
  total: number
  per_page: number
  current_page: number
  last_page: number
  first_page: number
  first_page_url: null | string
  last_page_url: null | string
  next_page_url: null | string
  previous_page_url: null | string
}
function VehiclesPage() {
  const [vehicles, setVehicles] = useState<IVehicle[]>([])
  const [page, setPage] = useState(1)
  const [meta, setMeta] = useState<IMeta>()
  const navigate = useNavigate()

  const fetchVehicles = async () => {
    await api
      .get('/vehicles', {
        data: {
          page: qs.stringify(page),
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setMeta(response.data.meta)
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

  useEffect(() => {
    if (meta?.current_page) {
      setPage(meta?.current_page)
    }
  }, [meta])

  useEffect(() => {
    if (meta?.next_page_url) {
      console.log(meta?.next_page_url)
      navigate(meta?.next_page_url)
    }
  }, [page])

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

        {meta?.next_page_url && (
          <Button onClick={() => fetchVehicles()}>{meta?.current_page}</Button>
        )}
      </main>
    </div>
  )
}

export default VehiclesPage
