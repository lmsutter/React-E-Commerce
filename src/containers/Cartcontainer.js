import { useEffect, useState } from "react"
import CartComponents from "../components/cart/CartComponents"
import { Loading } from "../components/reUsable/Loading"

export default function CartContainer ({ cartData, setCartData }) {
  const [cartItems, setCartItems] = useState(null)

  const idList = cartData.map(item => item.id).join(',')

  useEffect(() => {
    async function initialize () {
      const values = await fetch(`/.netlify/functions/getItemsById?id=${idList}`)
      const data = await values.json()
      setCartItems(data.items)
    }
    initialize()
  }, [cartData])


  return (
    <>
      {cartItems === null ? <Loading/> : 
        <CartComponents>
          <CartComponents.CartCard>
            {cartData.map( e => (
              <CartComponents.CartItem 
                key={`CartItem + ${e.id}`}
                qty={e.quantity}
                itemData={cartItems.find(item => item.id === e.id)}
                setCartData={setCartData}
                cartData={cartData}
            />
            ))}
          </CartComponents.CartCard>
          <CartComponents.CartTotal cartData={cartData} cartItems={cartItems} />
        </CartComponents>
      }
    </>
  )
}