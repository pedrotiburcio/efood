import * as S from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <S.ProductsCard>
    <img src={image} alt={title} />
    <S.Title>{title}</S.Title>
    <S.Description>{description}</S.Description>
    <S.Button>Adicionar ao carrinho</S.Button>
  </S.ProductsCard>
)

export default Product
