import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { colors } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const RestaurantCard = styled.div``

export const Image = styled.div`
  width: 100%;
  height: 217px;
  justify-content: end;
  position: relative;
  background-size: cover;

  ${TagContainer} {
    margin-left: 8px;
  }
`

export const Title = styled.h3`
  font-size: 18px;
  font-weight: bold;
  color: ${colors.darkPink};
`

export const Grade = styled(Title)`
  margin-right: 8px;
`

export const Infos = styled.div`
  padding: 8px;
  background-color: ${colors.white};
  border-right: 1px solid ${colors.darkPink};
  border-bottom: 1px solid ${colors.darkPink};
  border-left: 1px solid ${colors.darkPink};
  height: 208px;

  div {
    display: flex;
    align-items: center;
    justify-content: space-between;

    ${Title} {
      height: 21px;
    }
  }
`

export const Description = styled.p`
  margin: 16px 0;
  font-size: 14px;
  line-height: 22px;
  color: ${colors.darkPink};
  text-align: justify;
`

export const ButtonLink = styled(Link)`
  padding: 4px 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.darkPink};
  color: ${colors.pink};
`

export const InfosTag = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;

  &.message {
    ::first-letter {
      text-transform: uppercase;
    }
  }
}
`
