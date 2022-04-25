import * as Styled from './CartStyled'
import { Icon } from '@iconify/react'
import { PassiveListener } from 'react-event-injector'
import throttle from '../../helpers/throttle'

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

CartComponents.CartItem = function ({ children, qty, itemData, setCartData, cartData }) {

  function updateCartData(id, newQty) {
    const itemCartArrayIndex = cartData.findIndex(element => element.id === id)
    const cartCopy = [...cartData]
    if (newQty !== 0) {
      console.log(cartCopy[itemCartArrayIndex])
      cartCopy[itemCartArrayIndex].quantity = newQty
    } else {
      cartCopy.splice(itemCartArrayIndex, 1)
    }
    setCartData(cartCopy)
  }

  return (
    <Styled.CartItem>
      <img src={itemData.image} alt={itemData.title} />
      <h2>{itemData.title}</h2>
      <button className="delete" onClick={() => updateCartData(itemData.id, 0)}>X</button>
      <div className="costs">
        <p>Cost: $ {itemData.price}</p>
        <p>Total: $ {itemData.price * qty}</p>
      </div> 
      <div className="count">
        <button onClick={() => updateCartData(itemData.id, qty + 1)}><Icon icon="akar-icons:circle-plus-fill" /></button>
        <p className="quantity">{qty}</p>
        <button onClick={() => updateCartData(itemData.id, qty - 1)}><Icon icon="akar-icons:circle-minus-fill" /></button>
      </div>
    </Styled.CartItem>
  )
}

CartComponents.CartTotal = function CartTotal ({ cartData, data, children }) {
  const [top, setTop] = useState(window.innerHeight - 20)
  console.log(cartData)

  const elementRef = useRef(null)
  const initial = useRef({ isMouseDown: false, clickPos: null, elementTop: null })
  
  const mouseCurrentPos = useRef(null)
  const animationID = useRef(null)
  
  const velocity = useRef(NaN)
  const mouseDiffs = useRef([])

  const handleTouchDown = (e) => {
    initial.current.elementTop = elementRef.current.getBoundingClientRect().y 
    initial.current.clickPos = e.changedTouches.item(0).pageY
    initial.current.isMouseDown = true
  }
  
  const handleTouchMove = (e) => {
    if(initial.current.isMouseDown) {
      mouseCurrentPos.current = e.changedTouches.item(0).pageY
    }
  }

  const handleMouseDown = (e) => {
    e.preventDefault()
    initial.current.elementTop = elementRef.current.getBoundingClientRect().y 
    initial.current.clickPos = e.pageY
    initial.current.isMouseDown = true
    mouseCurrentPos.current = e.pageY
  }

  const handleMouseMove = (e) => {
    mouseCurrentPos.current = e.pageY
  }

  const upperTarget = window.innerHeight * 1/4
  const lowerTarget = window.innerHeight - 20 

  let aboveTransitionLine = elementRef.current && elementRef.current.getBoundingClientRect().y < window.innerHeight * 2/3
  let atUpperTarget =  elementRef.current && elementRef.current.getBoundingClientRect().y <= upperTarget
  let atLowerTarget =  elementRef.current &&  elementRef.current.getBoundingClientRect().y >= lowerTarget

  const velocityMin = 5
  
  const handleMouseUp = (e) => {
    initial.current.isMouseDown = false
    initial.current.clickPos = null
    initial.current.elementTop = null
    mouseCurrentPos.current = NaN
    
    let calculatedVelocity = mouseDiffs.current.reduce((accumulator, current) => {
      
      return accumulator + current
      
    }, 0)/mouseDiffs.current.length
    mouseDiffs.current = []
    
    if (atUpperTarget || atLowerTarget) {
      velocity.current = 0
    } else if (Math.abs(calculatedVelocity) > velocityMin) {
      velocity.current = calculatedVelocity
    } else if (aboveTransitionLine) {
      velocity.current = -velocityMin
    } else {
      velocity.current = velocityMin
    }
  }

  const isMobileRef = useRef(null) 

  const addSwipeFunctionality = () => {
    slideFunction()
    document.addEventListener('mouseup', handleMouseUp)
    document.addEventListener('mousemove', handleMouseMove)
    isMobileRef.current = false
  }

  const removeSwipeFunctionality = () => {
    cancelAnimationFrame(animationID.current)
    document.removeEventListener('mouseup', handleMouseUp)
    document.removeEventListener('mousemove', handleMouseMove)
    isMobileRef.current = true
  }

  function resizeHandler() {
    if (window.innerWidth <= 600 && !isMobileRef.current) {
      addSwipeFunctionality()
    } else if ( window.innerWidth > 600 && isMobileRef.current) { 
      removeSwipeFunctionality()
    }
  }

  const throttledResize = throttle(resizeHandler, 1000)

  useEffect(() => {
    if(window.innerWidth <= 600) {
      addSwipeFunctionality()
    }
    window.addEventListener('resize', throttledResize)

    return () => {
      removeSwipeFunctionality()
      window.removeEventListener('resize', throttledResize)
    }
  }, [])

  function slideFunction (oldMouse)  {
    //This below section sets mouseDiffs, which is where velocity comes from, mousediffs is an array of recent differences in mouse position
    //first if checks if more than a minimum time has passed before setting mouse diffs
    if (initial.current.isMouseDown) {
      if(mouseCurrentPos.current && oldMouse) {

        mouseDiffs.current.push(mouseCurrentPos.current - oldMouse)
      }
      if (mouseDiffs.current.length > 8) {
        mouseDiffs.current.shift()
      }
      
      oldMouse = mouseCurrentPos.current
    } 

    aboveTransitionLine = elementRef.current && elementRef.current.getBoundingClientRect().y < window.innerHeight * 2/3

    setTop(previous => {
      if (initial.current.isMouseDown) {
        //two possible categories of states, mouse is down: 
        if(mouseCurrentPos.current && mouseCurrentPos.current <= upperTarget) {
          //I think this is triggering when the mouse is near the bottom even
          //if mouse is above the upper target for the element keep element at target
          return upperTarget
        } else if (mouseCurrentPos.current && mouseCurrentPos.current >= lowerTarget) {
          //if mouse is below the lower target for the element keep element at target
          return lowerTarget
        } else if(mouseCurrentPos.current) {
          //if you have a mouse position the top should be the difference between the initial top of the element
          //and the difference between the initial mouse click and the current mouse position
          return initial.current.elementTop - (initial.current.clickPos - mouseCurrentPos.current) 
        } else {
          //fail safe in case
          return previous
        }
      } else {
        //if mouse isn't down
        if (elementRef.current.getBoundingClientRect().y <= upperTarget) {
          //first check if the element is at or above the upperTarget and keep it at the upperTarget
          return upperTarget
        } else if (elementRef.current.getBoundingClientRect().y >= lowerTarget) {
          //then check if element is at or below lowerTarget
          return lowerTarget
        } else if (velocity.current) {
          //if the mouse isn't down & the element isn't at a target, it should keep moving towards the target
          return previous + velocity.current
        } else {
          return previous
        }
      }
    })

    //after you set the top by a velocity, reduce absolute value of velocity
    if (Math.abs(velocity.current) <= velocityMin) {
      if(aboveTransitionLine) {
        velocity.current = -velocityMin
      } else {
        velocity.current = velocityMin
      }
    } else if (velocity.current >= velocityMin) {
      velocity.current = velocity.current - .3
    } else if (velocity.current <= -velocityMin) {
      velocity.current = velocity.current + .3
    }


    animationID.current = requestAnimationFrame(() => slideFunction(oldMouse))
    
  }

  function getTotal () {
    return cartData.reduce((accumulator, current) => {
      const matchedItem = data.find(item => item.id === current.id)
      if(!matchedItem) return 0
      return Math.round(accumulator + (matchedItem.price * current.quantity))
    }, 0)
  }

  function getTax () {
    return Math.round(getTotal() * .2)
  }

  function getShipping () {
    const amount = cartData.reduce((accumulator, current) => {
      return current.quantity + accumulator
    }, 0)
    if(amount > 5) {
      return 10
    } else return 5
  }

  return (
    <Styled.CartTotal top={top} ref={elementRef}>
      <PassiveListener
        onTouchStart={handleTouchDown}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleMouseUp}
      >
        <Icon 
          icon="akar-icons:circle-chevron-up" 
          className="swipe" 
          onMouseDown={handleMouseDown}
        />
      </PassiveListener>
      <div className='subCard'>
        <div className='totalInfo'>
          <p>Subtotal</p>
          <p>$ {getTotal()}</p>
        </div>
        <div className='totalInfo'>
          <p>Estimated Tax</p>
          <p>$ {getTax()}</p>
        </div>
        <div className='totalInfo'>
          <p>Estimated Shipping</p>
          <p>$ {getShipping()}</p>
        </div>
        <div className='totalInfo'>
          <p>Estimated Total</p>
          <p>$ {getTotal() + getTax() + getShipping()}</p>
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