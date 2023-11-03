import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
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
  const [restaurants, setRestaurants] = useState<RestaurantType[]>([])

  useEffect(() => {
    fetch('https://fake-api-tau.vercel.app/api/efood/restaurantes')
      .then((res) => res.json())
      .then((res) => setRestaurants(res))
  }, [])

  return (
    <>
      <Hero />
      <RestaurantsList restaurants={restaurants} />
      <Footer />
    </>
  )
}

export default Home
