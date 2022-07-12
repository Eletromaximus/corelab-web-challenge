import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'
import VehiclesPage from './pages/Vehicles'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/vehicles" element={<VehiclesPage />}>
          <Route path=":page" element={<VehiclesPage />} />
        </Route>
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}
