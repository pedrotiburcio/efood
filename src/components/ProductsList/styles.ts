import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const List = styled.ul`
  padding: 56px 0 120px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  column-gap: 32px;
  row-gap: 40px;
  background-color: ${colors.lightPink};

  @media (max-width: ${breakpoints.desktop}) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
  }
`

export const ProductsSection = styled.div`
  background-color: ${colors.lightPink};
`
