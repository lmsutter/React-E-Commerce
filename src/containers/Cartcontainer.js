import CartComponents from "../components/cart/CartComponents"

export default function CartContainer ({ cartData, data, setCartData }) {
  return (
    <CartComponents>
      <CartComponents.CartCard>
        {(cartData.length > 0 && data.length > 0) ? cartData.map( e => (
          <CartComponents.CartItem 
            key={`CartItem + ${e.id}`}
            qty={e.quantity}
            itemData={data.find(data => data.id === e.id)}
            setCartData={setCartData}
            cartData={cartData}
         />
        )) : <h2>Woops! Nothing in Cart yet!</h2>}
      </CartComponents.CartCard>
      <CartComponents.CartTotal cartData={cartData} data={data} />
    </CartComponents>
  )
}