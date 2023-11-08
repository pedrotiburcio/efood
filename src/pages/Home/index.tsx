import { useEffect, useState } from 'react'

import Footer from '../../components/Footer'
import RestaurantsList from '../../components/RestaurantsList'
import Hero from '../../components/Hero'
import { ProductType } from '../../components/Product'
import { useGetRestaurantsQuery } from '../../services/api'

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
