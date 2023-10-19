import ProductModel from '../../models/ProductModel'
import Product from '../Products'
import { ProductsSection, List } from './styles'

export type Props = {
  products: ProductModel[]
}

const ProductsList = ({ products }: Props) => (
  <ProductsSection>
    <div className="container">
      <List>
        {products.map((product) => (
          <Product
            key={product.id}
            image={product.image}
            title={product.title}
            description={product.description}
          />
        ))}
      </List>
    </div>
  </ProductsSection>
)

export default ProductsList
