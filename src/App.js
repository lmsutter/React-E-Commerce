
import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Category from './pages/Category';
import HeaderContainer from './containers/Header'
import Background from './containers/Background'
import Home from './pages/Home'



function App() {
  const [data, updateData] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>{
              updateData(json)
            })
            .catch(error => {
              console.log(error)
            })
  }, [])

  console.log(data)

// I hardcoded the ratings because those were consistent across all categories
  const breakpoints = {
    "jewelery": {
      price: [],
      popularity: [],
      rating: [0, 2.9, 3, 3.9, 4],
    },
    "electronics": {
      price: [],
      popularity: [],
      rating: [0, 2.9, 3, 3.9, 4],
    },
    "men's clothing": {
      price: [],
      popularity: [],
      rating: [0, 2.9, 3, 3.9, 4],
    },
    "women's clothing": {
      price: [],
      popularity: [],
      rating: [0, 2.9, 3, 3.9, 4],
    }
  }

  //I imagine this would be done on the backend or manually perhaps on a larger store. I did it this way to 
  //be a little flexible in case it was a small store with not many items. let's the filter breakpoints scale
  //based on how many items without having to manually set filter breakpoints
  useEffect(() => {
    const temp = {
      "jewelery": {
        count: 0,
        price: 0,
        popularity: 0,
        rating: 0,
      },
      "electronics": {
        count: 0,
        price: 0,
        popularity: 0,
        rating: 0,
      },
      "men's clothing": {
        count: 0,
        price: 0,
        popularity: 0,
        rating: 0,
      },
      "women's clothing": {
        count: 0,
        price: 0,
        popularity: 0,
        rating: 0,
      }
    }
    data.forEach(e => {
      temp[e.category].count += 1
      temp[e.category].price += e.price
      temp[e.category].popularity += e.rating.count
    })

    for (let key in temp) {
      let count = temp[key].count
      let priceBp = Math.round(temp[key].price / count / 3)
      breakpoints[key].price = [0, (priceBp-1), priceBp, (priceBp*2-1), priceBp*2]
      let popBp = Math.round(temp[key].popularity / count / 3)
      breakpoints[key].popularity = [0, (popBp - 1), popBp, (popBp*2-1), popBp*2]
    }
  }, [data])

  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Background />
      <HeaderContainer />

      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>

        <Route path='/category/:category' exact>
          <Category data={data} breakpoints={breakpoints}/>
        </Route>

        <Route path='/category/:category/:item'>
          <h2>Item page</h2>
        </Route>

        <Route path='/cart'>
          Cart
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
