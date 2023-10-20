import styled from 'styled-components'
import { colors } from '../../styles'

export const ProductsCard = styled.div`
  padding: 8px;
  background-color: ${colors.darkPink};
  color: ${colors.pink};

  img {
    display: block;
    width: 304px;
    height: 167px;
  }
`

export const Title = styled.h3`
  margin-top: 8px;
  font-size: 16px;
  font-weight: 900;
`

export const Description = styled.p`
  margin: 8px 0;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 22px;
`

export const Button = styled.button`
  padding: 4px 0;
  height: 24px;
  background-color: ${colors.pink};
  color: ${colors.darkPink};
  width: 100%;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  text-align: center;
  border: none;
  cursor: pointer;
`
