import Loader from '../Loader'
import Product from '../Product'

import * as S from './styles'

export type Props = {
  products?: ProductType[]
  isLoading: boolean
}

const ProductsList = ({ products, isLoading }: Props) => {
  if (isLoading) {
    return <Loader />
  }

  return (
    <S.ProductsSection>
      <div className="container">
        <S.List>
          {products &&
            products.map((product) => (
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
}

export default ProductsList
