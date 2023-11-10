import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ProductType } from '../../components/Product'

type ModalState = {
  item: ProductType
  isOpen: boolean
}

const initialState: ModalState = {
  item: {
    foto: '',
    preco: 0,
    id: 0,
    nome: '',
    descricao: '',
    porcao: ''
  },
  isOpen: false
}

const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    add: (state, action: PayloadAction<ProductType>) => {
      state.item = action.payload
    },
    open: (state) => {
      state.isOpen = true
    },
    close: (state) => {
      state.isOpen = false
    }
  }
})

export const { add, open, close } = modalSlice.actions
export default modalSlice.reducer
