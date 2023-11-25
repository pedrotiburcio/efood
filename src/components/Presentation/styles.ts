import ladolcevita from '../../assets/images/ladolcevita-big.png'

import styled from 'styled-components'

import { colors } from '../../styles'

export const PresentationContainer = styled.div`
  background-image: url(${ladolcevita});
  background-repeat: no-repeat;
  background-size: cover;
  height: 280px;

  .background {
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    padding-top: 24px;
    padding-bottom: 32px;
  }

  span {
    font-size: 32px;
    font-weight: 100;
    color: ${colors.white};
  }
`

export const Title = styled.h2`
  margin-top: 156px;
  font-size: 32px;
  font-weight: bold;
  color: ${colors.white};
`
