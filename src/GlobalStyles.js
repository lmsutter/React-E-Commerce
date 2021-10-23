import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #e1f7f0;

    max-width: 100vw;
    max-height: 100vh;
    overflow-X: hidden;
  }
`

export default GlobalStyle

