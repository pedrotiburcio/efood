import styled from 'styled-components'
import { TagProps } from '.'
import { colors } from '../../styles'

export const TagContainer = styled.div<TagProps>`
  padding: ${(props) => (props.children.length === 1 ? '6px 10px' : '6px 4px')};
  background-color: ${colors.darkPink};
  color: ${colors.pink};
  display: inline-block;
  font-size: 12px;
  font-weight: bold;
`
