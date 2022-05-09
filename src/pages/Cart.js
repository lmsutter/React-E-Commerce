import CartContainer from "../containers/Cartcontainer"

export default function Cart ({ cartData, data, setCartData }) {
  return (
    <CartContainer cartData={cartData} data={data} setCartData={setCartData} /> 
  )

}