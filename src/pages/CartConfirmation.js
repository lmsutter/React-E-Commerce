import CartConfirmationContainer from "../containers/CartConfirmationContainer"


export default function CartConfirmation ({ cartData}) {
  return (
    <main>
      <CartConfirmationContainer cartData={cartData} />

    </main>
  )
}