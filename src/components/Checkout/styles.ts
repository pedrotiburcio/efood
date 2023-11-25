import styled from 'styled-components'

import { Aside } from '../Cart/styles'
import { StandardButton } from '../Button/styles'
import { colors } from '../../styles'

type ButtonProps = {
  marginTop?: string
}

type InputGroupProps = {
  maxWidth?: string
}

type RowProps = {
  columnGap?: string
}

export const Title = styled.h3`
  color: ${colors.pink};
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  margin-bottom: 16px;
`

export const Row = styled.div<RowProps>`
  display: flex;
  column-gap: ${(props) => (props.columnGap ? props.columnGap : '34px')};
`

export const InputGroup = styled.div<InputGroupProps>`
  flex: auto;

  max-width: ${(props) => (props.maxWidth ? props.maxWidth : 'auto')};

  label {
    color: ${colors.pink};
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    display: block;
  }

  input {
    margin: 8px 0;
    padding: 0 8px;
    background-color: ${colors.pink};
    height: 32px;
    border: 1px solid ${colors.pink};
    width: 100%;

    &.error {
      background-color: #ffe564;
      border: 1px solid #000;
    }
  }
`

export const ButtonCheckout = styled(StandardButton)<ButtonProps>`
  margin-bottom: 8px;
  margin-top: ${(props) => props.marginTop || '0'};
`

export const ContainerOrder = styled.div`
  p {
    color: ${colors.pink};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin-bottom: 24px;
  }
`

export const AsideCheckout = styled(Aside)`
  overflow-y: auto;
`
