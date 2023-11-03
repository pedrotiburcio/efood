import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Perfil from '../src/pages/Perfil'

const Rotas = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/restaurant/:id" element={<Perfil />} />
  </Routes>
)

export default Rotas
