import { ThemeProvider } from 'styled-components'

export default function ThemeContextProvider({ children }) {
  const theme = {
    color1: "#7400B8",
    color2: "#4EA8DE",
    color3: "#80FFDB"
  }

  return (
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  )
}