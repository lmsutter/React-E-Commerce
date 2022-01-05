import { useHistory } from 'react-router-dom'



export default function CartButton ({children, id, quantity, cartData, setCartData}) {
  // will have to add in a check if quantity is undefined to set  it to 1 automatically.
   
  let history = useHistory()
  let tempData 
  const currentItemIndex = cartData.findIndex(each => each.id === id)

  function cartUpdater () {
    if(currentItemIndex !== -1) {
      tempData = [...cartData];
      tempData[currentItemIndex].quantity = tempData[currentItemIndex].quantity + quantity
    } else tempData = [...cartData, {id, quantity}]
    setCartData(tempData)
    history.push(`/cart-confirmation/${id}`)
  }
  


  return (
      <div onClick={cartUpdater}>
          {children}
      </div>
  )
}