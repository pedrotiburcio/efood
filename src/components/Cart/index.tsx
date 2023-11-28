import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { getTotalPrice, priceFormat } from '../../utils'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/checkout'

import * as S from './styles'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const open = () => {
    closeCart()
    dispatch(openDelivery())
  }

  const redirect = () => {
    if (items.length === 0) {
      return closeCart()
    }
    return open()
  }

  return (
    <S.Container className={isOpen ? 'is-open' : ''}>
      <S.Overlay onClick={closeCart} />
      <S.Aside>
        {items.length > 0 ? (
          <>
            <ul>
              {items.map((item) => (
                <S.CartItem key={item.id}>
                  <img src={item.foto} />
                  <div>
                    <h3>{item.nome}</h3>
                    <span>{priceFormat(item.preco)}</span>
                  </div>
                  <button
                    onClick={() => removeFromCart(item.id)}
                    type="button"
                  />
                </S.CartItem>
              ))}
            </ul>
            <S.PriceContent>
              <p>Valor total</p>
              <span>{priceFormat(getTotalPrice(items))}</span>
            </S.PriceContent>
            <Button
              title="Clique aqui para continuar com a entrega"
              type="button"
              onClick={() => redirect()}
            >
              Continuar com a entrega
            </Button>
          </>
        ) : (
          <>
            <p className="empty-text">
              O carrinho está vazio, adicione um produto para continuar com a
              compra.
            </p>
            <Button
              title="Clique aqui para retornar ao menu do restaurante"
              type="button"
              onClick={() => closeCart()}
            >
              Retornar
            </Button>
          </>
        )}
      </S.Aside>
    </S.Container>
  )
}

export default Cart
