import CartContainer from "../containers/Cartcontainer"

export default function Cart ({ cartData, setCartData }) {
  return (
    <CartContainer cartData={cartData} setCartData={setCartData} /> 
  )

}