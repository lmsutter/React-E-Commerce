import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Montserrat', sans-serif;
    background-color: white;
    max-width: 100%;
    height: 100%;
    overflow-X: hidden;
    margin: 0;
    padding: 0;

    overflow-y: auto;
  }

  html, body, * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`

export default GlobalStyle

