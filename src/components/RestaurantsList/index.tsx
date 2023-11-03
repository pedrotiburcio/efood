import Restaurant from '../Restaurant'
import { RestaurantType } from '../../pages/Home'
import { List, RestaurantsSection } from './styles'

export type Props = {
  restaurants: RestaurantType[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantsSection>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            id={restaurant.id}
            capa={restaurant.capa}
            titulo={restaurant.titulo}
            avaliacao={restaurant.avaliacao}
            destacado={restaurant.destacado}
            tipo={restaurant.tipo}
            descricao={restaurant.descricao}
            cardapio={restaurant.cardapio}
          />
        ))}
      </List>
    </div>
  </RestaurantsSection>
)

export default RestaurantsList
