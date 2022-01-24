
export default function useCartUpdater(state, setState) {

  
  return function cartUpdater(id, quantity, history) {
    let tempData 
    const currentItemIndex = state.findIndex(each => each.id === id)
  
    if(currentItemIndex !== -1) {
      tempData = [...state];
      tempData[currentItemIndex].quantity = tempData[currentItemIndex].quantity + quantity
    } else tempData = [...state, {id, quantity}]
    setState(tempData)
    history.push(`/cart-confirmation/${id}`)
  }
}

//I want: a function that I only pass quantity and id as parameters and it updates the cart local storage and takes me
//to cart confirmation page

/*
What do I want to happen? 
- I want re-usable code so that I can use the same bit of code multiple places (home page, info page)
- I want to be able to click, update the cart state, and also update local storage
Options
- Fully styled and ready to go component
  - tricky to style differently for different areas
- Hook
Considerations
- I already have the updating function

Solution:
- Hook that accepts cartData, setCartData
- returns a function that accepts id, quantity (and changes all the cart data)
(I still want the useLocalStorage hook so I can send data to the cart page directly)
- I think the cart page data manipulation will be different enough that it isn't worth doing the same function? 
- Cart page will be more about incrementing the number so it cares about current number. can just do that at component level.
*/