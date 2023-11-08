import { useState } from 'react'
import * as S from './styles'

import close from '../../assets/images/close.png'
import { priceFormat } from '../Product'
import { Button } from '../Product/styles'

type Props = {
  foto: string
  preco: number
  nome: string
  descricao: string
  porcao: string
}

const ModalPerfil = ({ foto, preco, nome, descricao, porcao }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <S.Modal className={modalIsOpen ? 'visible' : ''}>
      <S.ModalContent className="container">
        <header>
          <img src={close} alt="Ícone de fechar" onClick={() => closeModal()} />
        </header>
        <S.Content>
          <img src={foto} alt="Pizza marguerita" />
          <div>
            <h4>{nome}</h4>
            <p>{descricao}</p>
            <p>{`Serve: ${porcao}`} </p>
            <Button>{`Adicionar ao carrinho - ${priceFormat(preco)}`}</Button>
          </div>
        </S.Content>
      </S.ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </S.Modal>
  )
}
export default ModalPerfil
