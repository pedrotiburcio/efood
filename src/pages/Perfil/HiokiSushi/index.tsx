import Footer from '../../../components/Footer'
import Header from '../../../components/Header'
import Presentation from '../../../components/Presentation'
import ProductsList from '../../../components/ProductsList'
import ProductModel from '../../../models/ProductModel'
import hiokisushi from '../../../assets/images/hioki-sushi-big.png'
import barcasushi1 from '../../../assets/images/barca-sushi-1.jpg'
import temaki from '../../../assets/images/temaki.jpg'

const products: ProductModel[] = [
  {
    id: 1,
    image: barcasushi1,
    title: 'Barca Sushi',
    description:
      'A nossa maravilhosa barca individual de sushi, com sabores selecionados especialmente para você!'
  },
  {
    id: 2,
    image: barcasushi1,
    title: 'Barca Sushi',
    description:
      'A nossa maravilhosa barca individual de sushi, com sabores selecionados especialmente para você!'
  },
  {
    id: 3,
    image: barcasushi1,
    title: 'Barca Sushi',
    description:
      'A nossa maravilhosa barca individual de sushi, com sabores selecionados especialmente para você!'
  },
  {
    id: 4,
    image: temaki,
    title: 'Temaki Salmão',
    description:
      'O delicioso temaki de salmão fresco, acompanhado de arroz, gergelim, cebolinha e cream cheese!'
  },
  {
    id: 5,
    image: temaki,
    title: 'Temaki Salmão',
    description:
      'O delicioso temaki de salmão fresco, acompanhado de arroz, gergelim, cebolinha e cream cheese!'
  },
  {
    id: 6,
    image: temaki,
    title: 'Temaki Salmão',
    description:
      'O delicioso temaki de salmão fresco, acompanhado de arroz, gergelim, cebolinha e cream cheese!'
  }
]

const HiokiSushi = () => (
  <>
    <Header />
    <Presentation type={'Japonesa'} title={'Hioki Sushi'} image={hiokisushi} />
    <ProductsList products={products} />
    <Footer />
  </>
)

export default HiokiSushi
