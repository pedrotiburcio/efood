import { Link } from 'react-router-dom'

import styled from 'styled-components'

import { colors } from '../../styles'

export const StandardButton = styled.button`
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

export const LinkButton = styled(Link)`
  padding: 4px 6px;
  text-decoration: none;
  font-size: 14px;
  font-weight: bold;
  background-color: ${colors.darkPink};
  color: ${colors.pink};
  position: absolute;
  bottom: 8px;
  left: 8px;
`
