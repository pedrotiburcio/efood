import logo from '../../assets/images/logo.svg'
import { HeaderContainer, RestaurantLink } from './styles'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'
import { RootReducer } from '../../store'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <HeaderContainer>
      <div className="container">
        <RestaurantLink to={'/'}>Restaurantes</RestaurantLink>
        <img src={logo} alt="Logo efood" />
        <button onClick={openCart}>
          {items.length} produto(s) no carrinho
        </button>
      </div>
    </HeaderContainer>
  )
}

export default Header
