import React, {  useState } from 'react';
import { HashRouter as Router,  Route, Switch } from 'react-router-dom'
import useLocalStorage from './hooks/useLocalStorage'
import useCartUpdater from './hooks/useCartUpdater';

import Wrapper from './components/PageWrapper'; 

//Components
const Category = React.lazy( () => import('./pages/Category')) ;
const HeaderContainer = React.lazy( () => import ('./containers/Header')); 
const Background = React.lazy( () => import ('./containers/Background')); 
const Home = React.lazy( () => import ('./pages/Home')); 
const Footer = React.lazy( () => import ('./containers/Footer')); 
const InfoPage = React.lazy( () => import ('./pages/InfoPage')); 
const CartConfirmation = React.lazy( () => import ('./pages/CartConfirmation'));
const Cart = React.lazy( () => import ('./pages/Cart'));



function App() {
  const [sortFilterOption, setSortFilterOption] = useState(
    {sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'}
  )

  const [cartData, setCartData] = useLocalStorage('cart', [])
  const cartUpdater = useCartUpdater(cartData, setCartData)

  return (
    <>
      <Wrapper className="StyledWrapper">
        <React.Suspense fallback={<p>loading...</p>}>
        <Router basename={process.env.PUBLIC_URL}>
            <Background />
            <HeaderContainer setSortFilterOption={setSortFilterOption} />

            <Switch >
              <Route path='/' exact >
                <Home cartUpdater={cartUpdater} />
              </Route>

              <Route path='/category/:category' exact>
                <Category 

                  sortFilterOption={sortFilterOption} 
                  setSortFilterOption={setSortFilterOption}
                  cartUpdater={cartUpdater}
                />
              </Route>

              <Route path='/category/:category/:id'>
                <InfoPage cartUpdater={cartUpdater} />
              </Route>

              <Route exact path='/cart'>
                <Cart cartData={cartData} setCartData={setCartData} />
              </Route>

              <Route path='/cart-confirmation/:id'>
                <CartConfirmation cartData={cartData}  />
              </Route>

            </Switch>
            <Footer />
        </Router>
        </React.Suspense >
      </Wrapper>
  </>
  );
}

export default App;
