import * as S from './styles'
import { useDispatch } from 'react-redux'
import { open, add } from '../../store/reducers/modal'

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
        <S.Button onClick={openModal}>Mais detalhes</S.Button>
      </S.ProductsCard>
    </>
  )
}

export default Product
