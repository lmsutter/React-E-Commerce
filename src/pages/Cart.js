import CartContainer from "../containers/Cartcontainer"

export default function Cart ({ cartData, setCartData }) {
  return (
    <main>
      <CartContainer cartData={cartData} setCartData={setCartData} /> 
    </main>
  )

}