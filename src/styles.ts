import { createGlobalStyle } from 'styled-components'

export const colors = {
  darkPink: '#E66767',
  pink: '#FFEBD9',
  lightPink: '#FFF8F2',
  white: '#FFFFFF'
}

export const breakpoints = {
  desktop: '1024px',
  tablet: '768px'
}

export const GlobalCSS = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;

    @media (max-width: ${breakpoints.desktop}) {
      max-width: 90%;
    }
  }
`
