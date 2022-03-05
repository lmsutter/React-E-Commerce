import CartConfirmationContainer from "../containers/CartConfirmationContainer"


export default function CartConfirmation ({ data, cartData}) {
  return (
    <CartConfirmationContainer data={data} cartData={cartData} />
  )
}