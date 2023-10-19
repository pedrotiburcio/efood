import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LaDolceVita from './pages/Perfil/LaDolceVita'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolcevita" element={<LaDolceVita />} />
  </Routes>
)

export default Rotas
