import { useState, useEffect } from 'react'

//I imagine this would be done on the backend or manually perhaps on a larger store. I did it this way to 
  //be a little flexible in case it was a small store with not many items. let's the filter breakpoints scale
  //based on how many items without having to manually set filter breakpoints


  //instead of creating bp for each, check what category is current (data[0].category), iterate through each item in data
  export default function useBreakpoints (categoryData) {
    // I hardcoded the ratings because those were consistent across all categories

    const [breakpoints, setBreakpoints] = useState(
      {
        price: ['-', '-', '-', '-', '-'],
        popularity: ['-', '-', '-', '-', '-'],
        rating: [0, 2.9, 3, 3.9, 4],
      }
    )

    useEffect(() => {
  
      let totals = {
        count: 0,
        price: 0,
        popularity: 0,
      }

      let tempBp
      if (categoryData) {
        categoryData.forEach(item => {
          totals.count += 1
          totals.price += parseInt(item.price)
          totals.popularity += parseInt(item.ratingCount)
        })
    
        tempBp = {
          price: [],
          popularity: [],
          rating: [0, 2.9, 3, 3.9, 4],
        }
  
          let priceBp = Math.round(totals.price / totals.count / 3)
          tempBp.price = [0, (priceBp-1), priceBp, (priceBp*2-1), priceBp*2]
          let popBp = Math.round(totals.popularity / totals.count / 3)
          tempBp.popularity = [0, (popBp - 1), popBp, (popBp*2-1), popBp*2]

      }
      setBreakpoints(tempBp)

    }, [categoryData])
    return breakpoints 
  }