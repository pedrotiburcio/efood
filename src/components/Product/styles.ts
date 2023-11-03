import styled from 'styled-components'
import { colors } from '../../styles'

import { Button as ButtonM } from '../Product/styles'

export const ProductsCard = styled.div`
  padding: 8px;
  border-radius: 8px;
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

export const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  align-items: center;
  justify-content: center;

  &.visible {
    display: flex;
  }

  .overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.8);
  }
`

export const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${colors.darkPink};
  z-index: 1;

  header {
    display: flex;
    justify-content: end;

    img {
      width: 16px;
      height: 16px;
      margin: 8px;
    }
  }
`

export const Content = styled.div`
  display: flex;
  margin: 0 32px 32px 32px;

  img {
    margin-right: 24px;
    width: 280px;
    height: 280px;
  }

  h4 {
    color: ${colors.white};
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    line-height: normal;
  }

  p {
    color: ${colors.white};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    margin: 16px 0;
  }
`

export const ButtonModal = styled(ButtonM)`
  padding: 4px 8px;
  width: auto;
  text-align: justify;
`
