import { useDispatch, useSelector } from 'react-redux'
import { Container, Overlay, Aside, CartItem, PriceContent } from './styles'
import { Button } from '../Product/styles'
import { RootReducer } from '../../store'
import { close, remove } from '../../store/reducers/cart'
import { openDelivery } from '../../store/reducers/checkout'
import { priceFormat } from '../Product'

const Cart = () => {
  const { isOpen, items } = useSelector((state: RootReducer) => state.cart)

  const dispatch = useDispatch()

  const closeCart = () => {
    dispatch(close())
  }

  const removeFromCart = (id: number) => {
    dispatch(remove(id))
  }

  const getTotalPrice = () => {
    return items.reduce((accumulator, currentValue) => {
      return (accumulator += currentValue.preco)
    }, 0)
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
    <Container className={isOpen ? 'is-open' : ''}>
      <Overlay onClick={closeCart} />
      <Aside>
        <>
          <ul>
            {items.map((item) => (
              <CartItem key={item.id}>
                <img src={item.foto} />
                <div>
                  <h3>{item.nome}</h3>
                  <span>{priceFormat(item.preco)}</span>
                </div>
                <button onClick={() => removeFromCart(item.id)} type="button" />
              </CartItem>
            ))}
          </ul>
          <PriceContent>
            <p>Valor total</p>
            <span>{priceFormat(getTotalPrice())}</span>
          </PriceContent>
          <Button onClick={() => redirect()}>Continuar com a entrega</Button>
          {/* {items.length > 0 ? (
            <>
              <PriceContent>
                <p>Valor total</p>
                <span>{priceFormat(getTotalPrice())}</span>
              </PriceContent>
              <Button onClick={open}>Continuar com a entrega</Button>
            </>
          ) : (
            <>
              <Title>Ainda não há produto no carrinho.</Title>
              <Button onClick={closeCart}>Retornar</Button>
            </>
          )} */}
        </>
      </Aside>
    </Container>
  )
}

export default Cart
