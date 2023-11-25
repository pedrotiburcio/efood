import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ProductType } from '../../components/Product'

type CartState = {
  items: ProductType[]
  isOpen: boolean
}

const initialState: CartState = {
  items: [],
  isOpen: false
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      const product = state.items.find((item) => item.id === action.payload.id)

      if (!product) {
        state.items.push(action.payload)
      } else {
        alert('O produto já foi adicionado ao carrinho!')
      }
    },
    remove: (state, action: PayloadAction<number>) => {
      state.items = state.items.filter((item) => item.id !== action.payload)
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    },
    cleanCart: (state) => {
      state.items = []
    }
  }
})

export const { add, remove, open, close, cleanCart } = cartSlice.actions
export default cartSlice.reducer
