import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: white;
    max-width: 100vw;
    overflow-X: hidden;
    margin: 0;
    padding: 0;

    overflow-y: auto;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle

