
import { useEffect, useState } from 'react';
import { HashRouter as Router, Switch, Route } from 'react-router-dom'
import useBreakpoints from './hooks/useBreakpoints';
import useLocalStorage from './hooks/useLocalStorage'

//Components
import Category from './pages/Category';
import HeaderContainer from './containers/Header'
import Background from './containers/Background'
import Home from './pages/Home'
import Footer from './containers/Footer'
import InfoPage from './pages/InfoPage'
import CartConfirmation from './pages/CartConfirmation';
import Cart from './pages/Cart';
import Wrapper from './components/PageWrapper'

import useCartUpdater from './hooks/useCartUpdater';

function App() {
  const [data, updateData] = useState([])
  const [sortFilterOption, setSortFilterOption] = useState(
    {sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'}
  )

  const [cartData, setCartData] = useLocalStorage('cart', [])
  const cartUpdater = useCartUpdater(cartData, setCartData)


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>{
              return res.json()})
            .then(json=>updateData(json))
            .catch(error => {
              updateData(null)
            })
    
  }, [])


  const breakpoints = useBreakpoints(data)


  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Wrapper>
          <Background />
          <HeaderContainer setSortFilterOption={setSortFilterOption} />

          <Switch>
            <Route path='/' exact >
              <Home cartUpdater={cartUpdater} />
            </Route>

            <Route path='/category/:category' exact>
              <Category 
                breakpoints={breakpoints} 
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
        </Wrapper>
      </Router>
  </>
  );
}

export default App;
