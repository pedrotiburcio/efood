import Footer from '../../components/Footer'
import Hero from '../../components/Hero'
import RestaurantsList from '../../components/RestaurantsList'

import { useGetRestaurantsQuery } from '../../services/api'

const Home = () => {
  const { data: restaurants, isLoading } = useGetRestaurantsQuery()

  return (
    <>
      <Hero />
      <RestaurantsList restaurants={restaurants} isLoading={isLoading} />
      <Footer />
    </>
  )
}

export default Home
