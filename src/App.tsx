import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import Rotas from './routes'
import { store } from './store'
import Cart from './components/Cart'

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <GlobalCSS />
        </div>
        <Rotas />
        <Cart />
      </BrowserRouter>
    </Provider>
  )
}

export default App
