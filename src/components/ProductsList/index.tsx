import Product, { ProductType } from '../Product'

import { ProductsSection, List } from './styles'

export type Props = {
  products: ProductType[]
}

const ProductsList = ({ products }: Props) => (
  <ProductsSection>
    <div className="container">
      <List>
        {products.map((product) => (
          <Product
            key={product.id}
            id={product.id}
            foto={product.foto}
            nome={product.nome}
            descricao={product.descricao}
            preco={product.preco}
            porcao={product.porcao}
          />
        ))}
      </List>
    </div>
  </ProductsSection>
)

export default ProductsList
