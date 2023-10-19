import styled from 'styled-components'
import header from '../../assets/images/header.svg'
import { ButtonLink } from '../Restaurant/styles'
import { colors } from '../../styles'

export const RestaurantLink = styled(ButtonLink)`
  padding: 0;
  font-size: 18px;
  font-weight: 900;
  background-color: transparent;
  color: ${colors.darkPink};
`

export const HeaderContainer = styled.div`
  background-image: url(${header});
  padding: 64px 0;
  font-size: 18px;
  height: 186px;
  align-items: center;

  .container {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${RestaurantLink} {
      width: 256px;
    }

    p {
      width: 256px;
      text-align: right;
      font-size: 18px;
      font-weight: 900;
      color: ${colors.darkPink};
    }
  }
`
