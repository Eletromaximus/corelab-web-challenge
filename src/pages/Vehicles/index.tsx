import { useEffect, useState } from 'react'
import { getVehicles } from '../../lib/api'
import { Button, Card } from '../../components'
import styles from './Vehicles.module.scss'
import { IVehicle } from '../../types/Vehicle'

function VehiclesPage () {
  const [vehicles, setVehicles] = useState<IVehicle[]>([])
  // const [search, setSearch] = useState<string>('')

  useEffect(() => {
    const fetchVehicles = () => {
      const payload = getVehicles()
      setVehicles(vehicles.splice(0, 1, payload))
    }

    fetchVehicles()
  }, [])

  return (
    <div className={styles.Vehicles}>
      <main className={styles.main}>
        {/* <Search placeholder="Search" value={'ola'} /> */}

        <Button to="/cadastro">Add new vehicle</Button>

        {vehicles.map(vehicle => {
          return <Card key={vehicle.id} title={vehicle.name}>
          <p>
            Price: {new Intl.NumberFormat('pt-BR',
            { style: 'currency', currency: 'BRL' }).format(vehicle.price)}
          </p>
          <p>Description: {vehicle.description}</p>
          <p>Year: {vehicle.year}</p>
        </Card>
        })}

        <Card title="Sandero Stepway">
          <p>Price: 22000</p>
          <p>Description: Carro usado por 2 anos...</p>
          <p>Year: 2018</p>
        </Card>
      </main>
    </div>
  )
}

export default VehiclesPage
