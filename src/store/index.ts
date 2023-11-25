import { configureStore } from '@reduxjs/toolkit'

import cartReducer from './reducers/cart'
import modalReducer from './reducers/modal'
import checkoutReducer from './reducers/checkout'

import api from '../services/api'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalReducer,
    checkout: checkoutReducer,
    [api.reducerPath]: api.reducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware)
})

export type RootReducer = ReturnType<typeof store.getState>
