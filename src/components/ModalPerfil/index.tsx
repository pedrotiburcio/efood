import { useState } from 'react'
import { Button } from '../Product/styles'
import { Content, Modal, ModalContent } from './styles'

import close from '../../assets/images/close.png'

type Props = {
  image: string
  title: string
  description: string
  price: string
}

const ModalPerfil = ({ image, title, description, price }: Props) => {
  const [modalIsOpen, setModalIsOpen] = useState(true)

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <Modal className={modalIsOpen ? 'visible' : ''}>
      <ModalContent className="container">
        <header>
          <img src={close} alt="Ícone de fechar" onClick={() => closeModal()} />
        </header>
        <Content>
          <img src={image} alt="Pizza marguerita" />
          <div>
            <h4>{title}</h4>
            <p>{description}</p>
            <Button>Adicionar ao carrinho - R$ {price}</Button>
          </div>
        </Content>
      </ModalContent>
      <div className="overlay" onClick={() => closeModal()}></div>
    </Modal>
  )
}
export default ModalPerfil
