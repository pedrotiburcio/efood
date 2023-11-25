import logo from '../../assets/images/logo.svg'
import facebook from '../../assets/images/facebook.svg'
import twitter from '../../assets/images/twitter.svg'
import instagram from '../../assets/images/instagram.svg'

import * as S from './styles'

const Footer = () => (
  <S.FooterContainer>
    <div className="container">
      <img src={logo} alt="Logo efood" />
      <S.Logos>
        <img src={instagram} alt="Logo instagram" />
        <img src={facebook} alt="Logo facebook" />
        <img src={twitter} alt="Logo twitter" />
      </S.Logos>
      <p>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </p>
    </div>
  </S.FooterContainer>
)

export default Footer
