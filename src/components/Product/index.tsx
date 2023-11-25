import { useDispatch } from 'react-redux'

import Button from '../Button'

import { open, add } from '../../store/reducers/modal'

import * as S from './styles'

export type ProductType = {
  foto: string
  preco: number
  id: number
  nome: string
  descricao: string
  porcao: string
}

const getDescription = (description: string) => {
  if (description.length > 175) {
    return description.slice(0, 160) + '...'
  }
  return description
}

const Product = ({ foto, preco, id, nome, descricao, porcao }: ProductType) => {
  const selectedProduct = {
    foto,
    preco,
    nome,
    id,
    descricao,
    porcao
  }

  const dispatch = useDispatch()

  const openModal = () => {
    dispatch(add(selectedProduct))
    dispatch(open())
  }

  return (
    <>
      <S.ProductsCard>
        <img src={foto} alt={nome} />
        <S.Title>{nome}</S.Title>
        <S.Description>{getDescription(descricao)}</S.Description>
        <Button
          title="Clique aqui para saber mais detalhes sobre o produto"
          type="button"
          onClick={openModal}
        >
          Mais detalhes
        </Button>
      </S.ProductsCard>
    </>
  )
}

export default Product
