
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

