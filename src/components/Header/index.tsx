import { RootReducer } from '../../store'

import { open } from '../../store/reducers/cart'
import { useDispatch, useSelector } from 'react-redux'

import logo from '../../assets/images/logo.svg'

import * as S from './styles'

const Header = () => {
  const dispatch = useDispatch()
  const { items } = useSelector((state: RootReducer) => state.cart)

  const openCart = () => {
    dispatch(open())
  }

  return (
    <S.HeaderContainer>
      <div className="container">
        <S.RestaurantLink
          title="Clique aqui para ir para a página de restaurantes"
          type="link"
          to={'/'}
        >
          Restaurantes
        </S.RestaurantLink>
        <h1>
          <img src={logo} alt="Logo efood" />
        </h1>
        <button onClick={openCart}>
          {items.length} produto(s) no carrinho
        </button>
      </div>
    </S.HeaderContainer>
  )
}

export default Header
