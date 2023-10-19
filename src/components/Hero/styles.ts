import styled from 'styled-components'

import { colors } from '../../styles'
import hero from '../../assets/images/hero.svg'

export const HeroContainer = styled.div`
  background-image: url(${hero});
  padding: 40px;
  text-align: center;
`

export const Title = styled.h1`
  font-size: 36px;
  font-weight: 900;
  color: ${colors.darkPink};
  margin-top: 138px;
`
