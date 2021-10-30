import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: #e1f7f0;
    max-width: 100vw;
    max-height: 100vh;
    overflow-X: hidden;
  }

  * {
    margin: 0;
    padding: 0;
  }
`

export default GlobalStyle

