import Product, { ProductType } from '../Product'

import * as S from './styles'

export type Props = {
  products: ProductType[]
}

const ProductsList = ({ products }: Props) => (
  <S.ProductsSection>
    <div className="container">
      <S.List>
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
      </S.List>
    </div>
  </S.ProductsSection>
)

export default ProductsList
