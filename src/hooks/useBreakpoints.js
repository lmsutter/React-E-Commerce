import { useState, useEffect } from 'react'

//I imagine this would be done on the backend or manually perhaps on a larger store. I did it this way to 
  //be a little flexible in case it was a small store with not many items. let's the filter breakpoints scale
  //based on how many items without having to manually set filter breakpoints
  export default function useBreakpoints (data) {
    const [breakpoints, setBreakpoints] = useState(
      // I hardcoded the ratings because those were consistent across all categories
 
      {
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
    )

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
  
      let tempBp = {
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

      for (let key in temp) {
        let count = temp[key].count
        let priceBp = Math.round(temp[key].price / count / 3)
        tempBp[key].price = [0, (priceBp-1), priceBp, (priceBp*2-1), priceBp*2]
        let popBp = Math.round(temp[key].popularity / count / 3)
        tempBp[key].popularity = [0, (popBp - 1), popBp, (popBp*2-1), popBp*2]
      }
      setBreakpoints(tempBp)

    }, [data])
    return breakpoints 
  }