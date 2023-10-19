import { Title, HeroContainer } from './styles'

import logo from '../../assets/images/logo.svg'

const Hero = () => (
  <HeroContainer>
    <div className="container">
      <img src={logo} alt="Logo efood" />
      <Title>
        Viva experiências gastronômicas <br />
        no conforto da sua casa
      </Title>
    </div>
  </HeroContainer>
)

export default Hero
