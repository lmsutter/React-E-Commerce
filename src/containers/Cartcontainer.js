import CartComponents from "../components/Cart/CartComponents"

export default function CartContainer ({ cartData, data, setCartData }) {
  return (
    <CartComponents>
      <CartComponents.CartCard>
        {(cartData.length > 0 && data.length > 0) && cartData.map( e => (
          <CartComponents.CartItem 
            key={`CartItem + ${e.id}`}
            qty={e.quantity}
            itemData={data.find(data => data.id === e.id)}
            setCartData={setCartData}
            cartData={cartData}
         />
        ))}
      </CartComponents.CartCard>
      <CartComponents.CartTotal cartData={cartData} data={data} />
    </CartComponents>
  )
}