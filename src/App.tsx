import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import Rotas from './routes'
import Cart from './components/Cart'
import Modal from './components/Modal'
import Checkout from './components/Checkout'

import { store } from './store'

import { GlobalCSS } from './styles'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalCSS />
        </div>
        <Rotas />
        <Cart />
        <Checkout />
        <Modal />
      </BrowserRouter>
    </Provider>
  )
}

export default App
