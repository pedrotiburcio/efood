import Restaurant from '../Restaurant'
import { List, RestaurantsSection } from './styles'
import RestaurantModel from '../../models/RestaurantModel'

export type Props = {
  restaurants: RestaurantModel[]
}

const RestaurantsList = ({ restaurants }: Props) => (
  <RestaurantsSection>
    <div className="container">
      <List>
        {restaurants.map((restaurant) => (
          <Restaurant
            key={restaurant.id}
            image={restaurant.image}
            title={restaurant.title}
            grade={restaurant.grade}
            tags={restaurant.tags}
            description={restaurant.description}
            to={restaurant.to}
          />
        ))}
      </List>
    </div>
  </RestaurantsSection>
)

export default RestaurantsList
