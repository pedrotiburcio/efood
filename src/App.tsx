import { BrowserRouter } from 'react-router-dom'

import { GlobalCSS } from './styles'
import Rotas from './routes'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <GlobalCSS />
      </div>
      <Rotas />
    </BrowserRouter>
  )
}

export default App
