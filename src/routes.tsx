import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import LaDolceVita from './pages/Perfil/LaDolceVita'
import HiokiSushi from './pages/Perfil/HiokiSushi'
const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/ladolcevita" element={<LaDolceVita />} />
    <Route path="/hiokisushi" element={<HiokiSushi />} />
  </Routes>
)

export default Rotas
