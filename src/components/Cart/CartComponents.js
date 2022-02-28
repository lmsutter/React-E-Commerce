import * as Styled from './CartStyled'
import { Icon } from '@iconify/react'

import { useState, useRef, useEffect } from 'react'

export default function CartComponents ({ children }) {
  return (
    <Styled.Frame>
      {children}
    </Styled.Frame>
  )
}

CartComponents.CartCard = function ({ children }) {
  return (
    <Styled.CartCard>
      {children}
    </Styled.CartCard>
  )
}

CartComponents.CartItem = function ({ children, qty, itemData }) {
  return (
    <Styled.CartItem>
      <img src={itemData.image} alt={itemData.title} />
      <h2>{itemData.title}</h2>
      <button className="exit">X</button>
      <div className="costs">
        <p>Cost: {itemData.price}</p>
        <p>Total: {itemData.price * qty}</p>
      </div>
      <div className="count">
        <button><Icon icon="akar-icons:circle-plus-fill" /></button>
        <p className="quantity">{qty}</p>
        <button><Icon icon="akar-icons:circle-minus-fill" /></button>
      </div>
    </Styled.CartItem>
  )
}

CartComponents.CartTotal = function CartTotal ({ children }) {
  const [slideDiff, setSlideDiff] = useState(320)

  const currentPos = useRef(null)
  const mouseData = useRef({down: false, startingY: 0})
  const animationID = useRef(null)
  console.log(mouseData.current, currentPos.current)


  // console.log(mouseData, currentPos.current)

  //handle mousedown, start a animation function loop (& get starting position)
  //handle onMouseMove, update location, pass the diff down to the component & have it translate based on that pixel diff
  //each animation loop check diff between current & starting position
  // state: isDown, starting position, current position
  // try keeping the current position in a ref so that it doesn't trigger a re-render

  //try keeping the mouse start data in a ref

  useEffect(() => {
    slideFunction()
    return () => cancelAnimationFrame(animationID.current)
  }, [])

  function slideFunction ()  {
    console.log(mouseData.current, currentPos.current)

    setSlideDiff(current => {
      if(!mouseData.current.down) {
        return current
      } else {
        return currentPos.current - mouseData.current.startingY
      }
    })
    animationID.current = requestAnimationFrame(slideFunction)
    
  }


  const handleMouseDown = (e) => {
    mouseData.current = {down: true, startingY: e.clientY}
    currentPos.current = e.clientY
  }

  const handleMouseMove = (e) => {
    if(mouseData.current.down) {
      currentPos.current = e.clientY
    }
  }

  const handleMouseUp = (e) => {
    mouseData.current = { ...mouseData.current, down: false}
  }
  

  return (
    <Styled.CartTotal slideDiff={slideDiff}>
      <Icon 
        icon="akar-icons:circle-chevron-up" 
        className="swipe" 
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onMouseMove={handleMouseMove}
      />
      <div className='subCard'>
        <div className='totalInfo'>
          <p>Subtotal</p>
          <p>$$$</p>
        </div>
        <div className='totalInfo'>
          <p>Estimated Tax</p>
          <p>$$$</p>
        </div>
        <div className='totalInfo'>
          <p>Estimated Shipping</p>
          <p>$$$</p>
        </div>
        <div className='totalInfo'>
          <p>Estimated Total</p>
          <p>$$$</p>
        </div>
      </div>

      <div className='subCard'>
        <p>Accepted Payments</p>
        <div>
        <Icon icon="akar-icons:credit-card" />
        <Icon icon="akar-icons:credit-card" />
        <Icon icon="akar-icons:credit-card" />
        <Icon icon="akar-icons:credit-card" />
        </div>
      </div>
      {children}
    </Styled.CartTotal>
  )
}