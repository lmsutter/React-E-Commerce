
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useBreakpoints from './hooks/useBreakpoints';

//Components
import Category from './pages/Category';
import HeaderContainer from './containers/Header'
import Background from './containers/Background'
import Home from './pages/Home'
import Footer from './containers/Footer'



function App() {
  const [data, updateData] = useState([])
  const [sortFilterOption, setSortFilterOption] = useState(
    {sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'}
  )

  console.log(sortFilterOption)

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
    <Router basename={process.env.PUBLIC_URL}>
      <Background />
      <HeaderContainer setSortFilterOption={setSortFilterOption} />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/category/:category' exact>
          <Category data={data} breakpoints={breakpoints} sortFilterOption={sortFilterOption} setSortFilterOption={setSortFilterOption} />
        </Route>

        <Route path='/category/:category/:item'>
          <h2>Item page</h2>
        </Route>

        <Route path='/cart'>
          Cart
        </Route>

      </Switch>

      <Footer />

    </Router>
  );
}

export default App;
