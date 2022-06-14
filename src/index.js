import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyles'
import ThemeContextProvider from './context/ThemeProvider'

ReactDOM.render(
 
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <App />
      </ThemeContextProvider>
    </>,

  document.getElementById('root')
);

