import Footer from '../../components/Footer'
import RestaurantsList from '../../components/RestaurantsList'
import RestaurantModel from '../../models/RestaurantModel'
import hioki from '../../assets/images/hioki-sushi.png'
import ladolcevita from '../../assets/images/ladolcevita-trattoria.png'
import Hero from '../../components/Hero'

const restaurants: RestaurantModel[] = [
  {
    id: 1,
    image: hioki,
    title: 'Hioki Sushi',
    grade: 4.9,
    tags: ['Destaque da semana', 'Japonesa'],
    description:
      'Peça já o melhor da culinária japonesa no conforto da sua casa! Sushis frescos, sashimis deliciosos e pratos quentes irresistíveis. Entrega rápida, embalagens cuidadosas e qualidade garantida. \
    Experimente o Japão sem sair do lar com nosso delivery!',
    to: '/'
  },
  {
    id: 2,
    image: ladolcevita,
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/ladolcevita'
  },
  {
    id: 3,
    image: ladolcevita,
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/ladolcevita'
  },
  {
    id: 4,
    image: ladolcevita,
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/ladolcevita'
  },
  {
    id: 5,
    image: ladolcevita,
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/ladolcevita'
  },
  {
    id: 6,
    image: ladolcevita,
    title: 'La Dolce Vita Trattoria',
    grade: 4.6,
    tags: ['Italiana'],
    description:
      'A La Dolce Vita Trattoria leva a autêntica cozinha italiana até você! Desfrute de massas caseiras, pizzas deliciosas e risotos incríveis, tudo no conforto do seu lar. Entrega rápida, pratos bem embalados e sabor inesquecível. Peça já!',
    to: '/ladolcevita'
  }
]

const Home = () => (
  <>
    <Hero />
    <RestaurantsList restaurants={restaurants} />
    <Footer />
  </>
)

export default Home
