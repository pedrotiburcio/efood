import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantsQuery } from '../../services/api'

import { ProductType } from '../../components/Product'

export type RestaurantType = {
  id: number
  titulo: string
  destacado: boolean
  tipo: string
  avaliacao: number
  descricao: string
  capa: string
  cardapio: ProductType[]
}

const Home = () => {
  const { data: restaurants } = useGetRestaurantsQuery()

  if (restaurants) {
    return (
      <>
        <Hero />
        <RestaurantsList restaurants={restaurants} />
        <Footer />
      </>
    )
  }

  return <h4>Carregando...</h4>
}

export default Home
