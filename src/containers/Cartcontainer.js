import CartComponents from "../components/Cart/CartComponents"

export default function CartContainer ({ cartData, data, children }) {
  return (
    <CartComponents>
      <CartComponents.CartCard>
        {(cartData.length > 0 && data.length > 0) && cartData.map( e => (
          <CartComponents.CartItem 
            key={`CartItem + ${e.id}`}
            qty={e.quantity}
            itemData={data.find(data => data.id === e.id)}
         />
        ))}
      </CartComponents.CartCard>
      <CartComponents.CartTotal />
    </CartComponents>
  )
}