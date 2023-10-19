import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#E66767',
  pink: '#FFEBD9',
  lightPink: '#FFF8F2',
  white: '#FFFFFF'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
