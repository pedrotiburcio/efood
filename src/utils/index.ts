import { ProductType } from '../components/Product'

export const priceFormat = (price = 0) => {
  return new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  }).format(price)
}

export const getTotalPrice = (items: ProductType[]) => {
  return items.reduce((accumulator, currentValue) => {
    return (accumulator += currentValue.preco)
  }, 0)
}
