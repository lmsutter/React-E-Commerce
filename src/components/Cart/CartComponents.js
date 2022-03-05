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
  const [top, setTop] = useState(300)
  
  const elementRef = useRef(null)
  const initial = useRef({ isMouseDown: false, clickPos: null, elementTop: null })
  
  const mouseCurrentPos = useRef(null)
  const animationID = useRef(null)
  
  const velocity = useRef(NaN)
  const mouseDiffs = useRef([])


  const handleMouseUp = (e) => {
    initial.current.isMouseDown = false
    initial.current.clickPos = null
    initial.current.elementTop = null
    mouseCurrentPos.current = null

    const temp = mouseDiffs.current.reduce((prev, curr) => {return prev + curr}, 0)

    velocity.current = (temp/mouseDiffs.current.length)
  }

  const handleMouseMove = (e) => {
    if(initial.current.isMouseDown) {
      e.preventDefault()
      mouseCurrentPos.current = e.pageY
    }
  }

  useEffect(() => {
    slideFunction()
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
    return () => {
      cancelAnimationFrame(animationID.current)
      document.removeEventListener('mouseup', handleMouseUp)
    }
  }, [])


  function slideFunction (oldTime, previousMouse)  {
    //velocity: set in handleMouse up by reducing the array
    //v: then, every time slide function is called set velocity by constant # & set top by reducing velocity

    let currentTime = new Date().getTime()
    let mouseData = previousMouse ? previousMouse : mouseCurrentPos.current
    
    if (!oldTime || currentTime - oldTime > 100) {
      mouseData = mouseCurrentPos.current

      let temp = [...mouseDiffs.current]

      if(previousMouse !== null && mouseData !== null) {
        temp.push((previousMouse - mouseData))
      } else {temp.push(0)}
      if (temp.length > 5) temp.shift()

      mouseDiffs.current = temp
      
      
    } else { currentTime = oldTime }


    setTop(previous => {
      if(initial.current.isMouseDown && mouseCurrentPos.current) {
        return initial.current.elementTop - (initial.current.clickPos - mouseCurrentPos.current) 
      } else if (!initial.current.isMouseDown && (velocity.current > .5 || velocity.current < .5)) {
        return previous - velocity.current
      } else {
        return previous
      }
    })
    console.log(elementRef.current.getBoundingClientRect().y)
    if (Math.abs(velocity.current) < .5) {
      velocity.current = 0
    } else if (velocity.current >= .5) {
      velocity.current = velocity.current -.2
    } else if (velocity.current <= -.5) {
      velocity.current = velocity.current + .2
    }


    animationID.current = requestAnimationFrame(() => slideFunction( currentTime, mouseData))
    
  }



  const handleMouseDown = (e) => {
    initial.current.elementTop = elementRef.current.getBoundingClientRect().y 
    initial.current.clickPos = e.pageY
    initial.current.isMouseDown = true
  }



  return (
    <Styled.CartTotal top={top} ref={elementRef}>
      <Icon 
        icon="akar-icons:circle-chevron-up" 
        className="swipe" 
        onMouseDown={handleMouseDown}
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