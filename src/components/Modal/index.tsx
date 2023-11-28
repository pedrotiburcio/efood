import { useDispatch, useSelector } from 'react-redux'

import Button from '../Button'

import { add, open } from '../../store/reducers/cart'
import { close } from '../../store/reducers/modal'
import { RootReducer } from '../../store'
import { priceFormat } from '../../utils'

import closeImg from '../../assets/images/close.png'

import * as S from './styles'

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
          <img src={item.foto} alt={item.nome} />
          <div>
            <h4>{item.nome}</h4>
            <p>{item.descricao}</p>
            <p>{`Serve: ${item.porcao}`} </p>
            <Button
              title="Clique aqui para adicionar este produto ao carrinho"
              type="button"
              onClick={addToCart}
            >{`Adicionar ao carrinho - ${priceFormat(item.preco)}`}</Button>
          </div>
        </S.Content>
      </S.ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </S.Modal>
  )
}
export default Modal
