import * as S from './styles'

import { priceFormat } from '../Product'
import { Button } from '../Product/styles'
import { useDispatch, useSelector } from 'react-redux'

import closeImg from '../../assets/images/close.png'
import { add, open } from '../../store/reducers/cart'
import { close } from '../../store/reducers/modal'
import { RootReducer } from '../../store'

const Modal = () => {
  const { isOpen, item } = useSelector((state: RootReducer) => state.modal)

  const dispatch = useDispatch()

  const closeModal = () => {
    dispatch(close())
  }

  const addToCart = () => {
    closeModal()
    dispatch(add(item))
    dispatch(open())
  }

  return (
    <S.Modal className={isOpen ? 'visible' : ''}>
      <S.ModalContent className="container">
        <header>
          <img
            src={closeImg}
            alt="Ícone de fechar"
            onClick={() => closeModal()}
          />
        </header>
        <S.Content>
          <img src={item.foto} alt="Pizza marguerita" />
          <div>
            <h4>{item.nome}</h4>
            <p>{item.descricao}</p>
            <p>{`Serve: ${item.porcao}`} </p>
            <Button onClick={addToCart}>{`Adicionar ao carrinho - ${priceFormat(
              item.preco
            )}`}</Button>
          </div>
        </S.Content>
      </S.ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </S.Modal>
  )
}
export default Modal
