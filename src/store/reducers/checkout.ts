import { createSlice } from '@reduxjs/toolkit'

type CheckoutState = {
  deliveryIsOpen: boolean
  paymentIsOpen: boolean
  confirmationIsOpen: boolean
}

const initialState: CheckoutState = {
  deliveryIsOpen: false,
  paymentIsOpen: false,
  confirmationIsOpen: false
}

const checkoutSlice = createSlice({
  name: 'checkout',
  initialState,
  reducers: {
    openDelivery: (state) => {
      state.deliveryIsOpen = true
    },
    closeDelivery: (state) => {
      state.deliveryIsOpen = false
    },
    openPayment: (state) => {
      state.paymentIsOpen = true
    },
    closePayment: (state) => {
      state.paymentIsOpen = false
    },
    openConfirmation: (state) => {
      state.confirmationIsOpen = true
    },
    closeConfirmation: (state) => {
      state.confirmationIsOpen = false
    }
  }
})

export const {
  openDelivery,
  closeDelivery,
  openPayment,
  closePayment,
  openConfirmation,
  closeConfirmation
} = checkoutSlice.actions
export default checkoutSlice.reducer
