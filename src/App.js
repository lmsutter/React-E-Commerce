
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Link, NavLink } from 'react-router-dom'
import Category from './Components/Category';
import Header from './Components/Header'
import Background from './Components/Background'



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
      <Header />

      <Switch>
        <Route path='/' exact>
          Home
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
