import { useState } from 'react'

import close from '../../assets/images/close.png'
import * as S from './styles'
import { add, open } from '../../store/reducers/cart'
import { useDispatch } from 'react-redux'

export type ProductType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

export const priceFormat = (preco = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(preco)
}

const Product = ({ foto, preco, id, nome, descricao, porcao }: ProductType) => {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const getDescription = (description: string) => {
    if (description.length > 175) {
      return description.slice(0, 160) + '...'
    }
    return description
  }

  //adicionando produto e mostrando carrinho
  const dispatch = useDispatch()
  const selectedProduct = {
    foto,
    preco,
    id,
    nome,
    descricao,
    porcao
  }
  const addToCart = () => {
    dispatch(add(selectedProduct))
    dispatch(open())
  }

  return (
    <>
      <S.ProductsCard>
        <img src={foto} alt={nome} />
        <S.Title>{nome}</S.Title>
        <S.Description>{getDescription(descricao)}</S.Description>
        <S.Button onClick={() => setModalIsOpen(true)}>Mais detalhes</S.Button>
      </S.ProductsCard>
      <S.Modal className={modalIsOpen ? 'visible' : ''}>
        <S.ModalContent className="container">
          <header>
            <img
              src={close}
              alt="Ícone de fechar"
              onClick={() => closeModal()}
            />
          </header>
          <S.Content>
            <img src={foto} alt="Pizza marguerita" />
            <div>
              <h4>{nome}</h4>
              <p>{descricao}</p>
              <p>{`Serve: ${porcao}`} </p>
              <S.ButtonModal
                onClick={addToCart}
              >{`Adicionar ao carrinho - ${priceFormat(preco)}`}</S.ButtonModal>
            </div>
          </S.Content>
        </S.ModalContent>
        <div className="overlay" onClick={() => closeModal()}></div>
      </S.Modal>
    </>
  )
}

export default Product
