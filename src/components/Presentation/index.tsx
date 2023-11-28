import { useParams } from 'react-router-dom'

import Loader from '../Loader'

import { useGetSelectedRestaurantQuery } from '../../services/api'

import { PresentationContainer, Title } from './styles'

type RestaurantParams = {
  id: string
}

const Presentation = () => {
  const { id } = useParams() as RestaurantParams
  const { data: restaurant } = useGetSelectedRestaurantQuery(id)

  if (!restaurant) {
    return <Loader />
  }

  return (
    restaurant && (
      <PresentationContainer
        style={{ backgroundImage: `url(${restaurant.capa})` }}
      >
        <div className="background">
          <div className="container">
            <span>{restaurant.tipo}</span>
            <Title>{restaurant.titulo}</Title>
          </div>
        </div>
      </PresentationContainer>
    )
  )
}

export default Presentation
