import styled from 'styled-components'
import { colors } from '../../styles'
import garbage from '../../assets/images/garbage-icon.png'

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: none;
  justify-content: flex-end;
  z-index: 1;

  &.is-open {
    display: flex;
  }
`

export const Overlay = styled.div`
  position: absolute;
  top: 0;
  left: o;
  width: 100%;
  height: 100%;
  background-color: #000;
  opacity: 0.8;
`

export const Aside = styled.aside`
  max-width: 360px;
  width: 100%;
  height: 100%;
  background-color: ${colors.darkPink};
  z-index: 1;
  padding: 32px 8px 0 8px;
`

export const CartItem = styled.li`
  background-color: ${colors.pink};
  padding: 8px 8px 12px 8px;
  margin-bottom: 16px;
  display: flex;
  position: relative;

  img {
    height: 80px;
    width: 80px;
    object-fit: cover;
    margin-right: 8px;
  }

  h3 {
    color: ${colors.darkPink};
    text-align: center;
    font-size: 18px;
    font-style: normal;
    font-weight: 900;
    margin-bottom: 16px;
  }

  span {
    color: ${colors.darkPink};
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
  }

  button {
    background-image: url(${garbage});
    position: absolute;
    width: 16px;
    height: 16px;
    background-color: transparent;
    bottom: 8px;
    right: 8px;
    border: none;
  }
`

export const PriceContent = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 16px;
  margin-top: 40px;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  color: ${colors.pink};
`
