import styled from 'styled-components'

import { breakpoints, colors } from '../../styles'

export const List = styled.ul`
  padding: 80px 0 120px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;
  row-gap: 48px;
  background-color: ${colors.lightPink};

  @media (max-width: ${breakpoints.desktop}) {
    column-gap: 24px;
  }

  @media (max-width: ${breakpoints.tablet}) {
    grid-template-columns: 1fr;
    column-gap: 24px;
  }
`

export const RestaurantsSection = styled.div`
  background-color: ${colors.lightPink};
`
