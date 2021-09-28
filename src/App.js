
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Category from './Pages/Category';
import HeaderContainer from './Containers/Header'
import Background from './Components/Background'
import Home from './Pages/Home'



function App() {
  const [items, updateItems] = useState([])
  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              updateItems(json)
              console.log(json)
            })


  }, [])

  // console.log(items[0].image)

  return (
    <Router>
      <Background />
      <HeaderContainer />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/category/:category'>
          <Category />
        </Route>

        <Route path='/cart'>
          Cart
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
