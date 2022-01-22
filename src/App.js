
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
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


function App() {
  const [data, updateData] = useState([])
  const [sortFilterOption, setSortFilterOption] = useState(
    {sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'}
  )
  // console.log(data)

  const [cartData, setCartData] = useLocalStorage('cart', [])


  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              updateData(json)
            })
            .catch(error => {
              updateData(null)
            })
    
  }, [])


  const breakpoints = useBreakpoints(data)


  return (
    <>
      <Router basename={process.env.PUBLIC_URL}>
        <Background />
        <HeaderContainer setSortFilterOption={setSortFilterOption} />

        <Switch>
          <Route path='/' exact >
            <Home data={data} cartData={cartData} setCartData={setCartData}/>
          </Route>

          <Route path='/category/:category' exact>
            <Category 
              data={data} 
              breakpoints={breakpoints} 
              sortFilterOption={sortFilterOption} 
              setSortFilterOption={setSortFilterOption}
              cartData={cartData}
              setCartData={setCartData}
              />
          </Route>

          <Route path='/category/:category/:item'>
            <InfoPage data={data} cartData={cartData} setCartData={setCartData} />
          </Route>

          <Route exact path='/cart'>
            Cart
          </Route>

          <Route path='/cart-confirmation/:item'>
            <CartConfirmation data={data} cartData={cartData} setCartData={setCartData} />
          </Route>

        </Switch>

        <Footer />

      </Router>
  </>
  );
}

export default App;
