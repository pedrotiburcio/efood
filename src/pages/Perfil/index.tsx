import { useParams } from 'react-router-dom'

import Footer from '../../components/Footer'
import Header from '../../components/Header'
import Presentation from '../../components/Presentation'
import ProductsList from '../../components/ProductsList'

import { useGetSelectedRestaurantQuery } from '../../services/api'

const Perfil = () => {
  const { id } = useParams()

  const { data: restaurant } = useGetSelectedRestaurantQuery(id!)

  if (restaurant) {
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

  return <h4>Carregando...</h4>
}

export default Perfil
