import styled from 'styled-components'
import { colors } from '../../styles'

export const List = styled.ul`
  padding: 56px 0 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;
  background-color: ${colors.lightPink};
`

export const ProductsSection = styled.div`
  background-color: ${colors.lightPink};
`
