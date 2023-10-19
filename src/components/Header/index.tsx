import logo from '../../assets/images/logo.svg'
import { HeaderContainer, RestaurantLink } from './styles'

const Header = () => (
  <HeaderContainer>
    <div className="container">
      <RestaurantLink to={'/'}>Restaurantes</RestaurantLink>
      <img src={logo} alt="Logo efood" />
      <p>0 produto(s) no carrinho</p>
    </div>
  </HeaderContainer>
)

export default Header
