import styled from 'styled-components'
import header from '../../assets/images/header.svg'
import { ButtonLink } from '../Restaurant/styles'
import { breakpoints, colors } from '../../styles'

export const RestaurantLink = styled(ButtonLink)`
  padding: 0;
  font-size: 18px;
  font-weight: 900;
  background-color: transparent;
  color: ${colors.darkPink};
  width: 256px;
  bottom: 0;
  left: 0;
  position: relative;
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

    button {
      width: 256px;
      text-align: right;
      font-size: 18px;
      font-weight: 900;
      color: ${colors.darkPink};
      background-color: transparent;
      border: none;
    }
  }

  @media (max-width: ${breakpoints.tablet}) {
    padding: 24px 0;
    text-align: center;
    .container {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        margin: 16px 0;
      }

      button {
        text-align: center;
      }
    }
  }
`
