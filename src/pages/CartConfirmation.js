import CartConfirmationContainer from "../containers/CartConfirmationContainer"


export default function CartConfirmation ({cartData, setCartData, data}) {
  return (
    <CartConfirmationContainer data={data} cartData={cartData} setCartData={setCartData} />
  )
}