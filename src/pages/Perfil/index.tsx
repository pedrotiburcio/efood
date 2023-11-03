import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import ProductsList from '../../components/ProductsList'
import { RestaurantType } from '../Home'

const Perfil = () => {
  const { id } = useParams()

  const [restaurant, setRestaurant] = useState<RestaurantType>()

  useEffect(() => {
    fetch(`https://fake-api-tau.vercel.app/api/efood/restaurantes/${id}`)
      .then((res) => res.json())
      .then((res) => setRestaurant(res))
  }, [id])

  if (!restaurant) {
    return <h4>Carregando...</h4>
  }

  return (
    <>
      <Header />
      <Presentation
        type={restaurant.tipo}
        title={restaurant.titulo}
        image={restaurant.capa}
      />
      <ProductsList products={restaurant.cardapio} />
      <Footer />
    </>
  )
}

export default Perfil
