import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import ProductsList from '../../components/ProductsList'

import { useGetSelectedRestaurantQuery } from '../../services/api'

type RestaurantParams = {
  id: string
}

const Perfil = () => {
  const { id } = useParams() as RestaurantParams

  const { data: restaurant, isLoading } = useGetSelectedRestaurantQuery(id)

  return (
    <>
      <Header />
      <Presentation />
      <ProductsList products={restaurant?.cardapio} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default Perfil
