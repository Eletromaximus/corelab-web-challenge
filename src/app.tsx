import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Cadastro } from './pages/Cadastro'
import VehiclesPage from './pages/Vehicles'

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<VehiclesPage />} />
        <Route path="/cadastro" element={<Cadastro />} />
      </Routes>
    </BrowserRouter>
  )
}
