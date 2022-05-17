import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import GlobalStyle from './GlobalStyles'
import ThemeContextProvider from './context/ThemeProvider'

//deploy to github by just npm run deploy. It will automatically deploy to the right repo and be available at the page site
ReactDOM.render(
 
    <>
      <ThemeContextProvider>
        <GlobalStyle />
        <App />
      </ThemeContextProvider>
    </>,

  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

