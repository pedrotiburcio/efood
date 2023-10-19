import { Button, Description, ProductsCard, Title } from './styles'

type Props = {
  image: string
  title: string
  description: string
}

const Product = ({ image, title, description }: Props) => (
  <ProductsCard>
    <img src={image} alt={title} />
    <Title>{title}</Title>
    <Description>{description}</Description>
    <Button>Adicionar ao carrinho</Button>
  </ProductsCard>
)

export default Product
