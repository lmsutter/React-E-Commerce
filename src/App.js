
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import useBreakpoints from './hooks/useBreakpoints';

//Components
import Category from './pages/Category';
import HeaderContainer from './containers/Header'
import Background from './containers/Background'
import Home from './pages/Home'
import Footer from './containers/Footer'
import InfoPage from './pages/InfoPage'


function App() {
  const [data, updateData] = useState([])
  const [sortFilterOption, setSortFilterOption] = useState(
    {sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'}
  )



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

console.log(data)


  const breakpoints = useBreakpoints(data)



  return (
    <>
    <Router basename={process.env.PUBLIC_URL}>
      <Background />
      <HeaderContainer setSortFilterOption={setSortFilterOption} />

      <Switch>
        <Route path='/' exact >
          <Home data={data} />
        </Route>

        <Route path='/category/:category' exact>
          <Category data={data} breakpoints={breakpoints} sortFilterOption={sortFilterOption} setSortFilterOption={setSortFilterOption} />
        </Route>

        <Route path='/category/:category/:item'>
         
          <InfoPage data={data} />
        </Route>

        <Route path='/cart'>
          Cart
        </Route>

      </Switch>

      <Footer />

    </Router>
  </>
  );
}

export default App;
