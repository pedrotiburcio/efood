import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../components/Product'

type CartState = {
  items: ProductType[]
}

const initialState: CartState = {
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      state.items.push(action.payload)
    }
  }
})

export const { add } = cartSlice.actions
export default cartSlice.reducer
