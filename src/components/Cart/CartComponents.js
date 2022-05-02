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
    const itemCartArrayIndex = cartData.findIndex(product => product.id === id)
    const cartCopy = [...cartData]
    if (newQty !== 0) {
      cartCopy[itemCartArrayIndex].quantity = newQty
    } else {
      cartCopy.splice(itemCartArrayIndex, 1)
    }
    setCartData(cartCopy)
  }

  function textLimiter(text) {

    if (text.length > 50) {
      return text.split('').slice(0, 50).join('') + '...'
    }
    return text
  }

  return (
    <Styled.CartItem>
      <img src={itemData.image} alt={itemData.title} />
      <h2>{textLimiter(itemData.title)}</h2>
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
  const [tap, setTap] = useState({time: null, direction: null})

  const elementRef = useRef(null)
  const initial = useRef({ isMouseDown: false, clickPos: null, elementTop: null, time: NaN })
  const mouseCurrentPos = useRef(null)
  const animationID = useRef(null)
  
  const velocity = useRef(0)
  const mouseDiffs = useRef([])

  const upperTarget = window.innerHeight * 1/4
  const lowerTarget = window.innerHeight - 20 

  let aboveTransitionLine = elementRef.current && elementRef.current.getBoundingClientRect().y < window.innerHeight * 2/3
  let atUpperTarget =  elementRef.current && elementRef.current.getBoundingClientRect().y <= upperTarget
  let atLowerTarget =  elementRef.current &&  elementRef.current.getBoundingClientRect().y >= lowerTarget

  const velocityMin = 5

  const handleTouchDown = (e) => {
    initial.current.time = e.timeStamp
    initial.current.elementTop = elementRef.current.getBoundingClientRect().y 
    initial.current.clickPos = e.changedTouches.item(0).pageY
    initial.current.isMouseDown = true
  }
  
  const handleTouchMove = (e) => {
    if(initial.current.isMouseDown) {
      mouseCurrentPos.current = e.changedTouches.item(0).pageY
    }
  }



  const handleMove = (e) => {
    if (initial.current.isMouseDown) {
      mouseCurrentPos.current = e.pageY

    }
  }

  const handleTouchUp = (e) => {
    initial.current.isMouseDown = false
    initial.current.clickPos = null
    initial.current.elementTop = null
    mouseCurrentPos.current = null
    setTap({time: e.timeStamp - initial.current.time, direction: aboveTransitionLine ? 'down' : 'up'})

    let calculatedVelocity = mouseDiffs.current.reduce((accumulator, current) => {
      return accumulator + current
    }, 0)/mouseDiffs.current.length

    mouseDiffs.current = []
    
    if (tap.time < 1000) {
      velocity.current = aboveTransitionLine ? velocityMin*2 : -(velocityMin*2)

    } else if(atUpperTarget || atLowerTarget) {
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
    document.addEventListener('mousemove', handleMove)
    isMobileRef.current = false
  }

  const removeSwipeFunctionality = () => {
    cancelAnimationFrame(animationID.current)
    document.removeEventListener('mousemove', handleMove)
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
      if (initial.current.isMouseDown && mouseCurrentPos.current) {
        const calcTarget = initial.current.elementTop - (initial.current.clickPos - mouseCurrentPos.current) 
        if(aboveTransitionLine) {
          return Math.max(upperTarget, calcTarget)
        } else if (!aboveTransitionLine) {
          return Math.min(lowerTarget, calcTarget)
        }

        return calcTarget
      } else {
        return previous + velocity.current
      }
    })

    setTap(previous => {
      if(aboveTransitionLine && previous.direction === 'up') {
        return {direction: null, time: null}
      } else if (!aboveTransitionLine && previous.direction === 'down') {
        return {direction: null, time: null}
      } else return previous
    })


    animationID.current = requestAnimationFrame(() => slideFunction(oldMouse))
    
  }

  useEffect(() => {
    //anytime top (of the element) or tap changes, change velocity

    if(tap.time < 500 && tap.time !== null) {

      if(tap.direction === 'up' && elementRef.current.getBoundingClientRect().y >= upperTarget) {
        //if the element has been tapped and is going up but is not above the upperTarget, velocity is negative
        velocity.current = -(velocityMin*2)
      } else if (tap.direction === 'down' && elementRef.current.getBoundingClientRect().y <= lowerTarget) {
        //the opposite
        velocity.current = velocityMin*2
      }
    } else if (elementRef.current.getBoundingClientRect().y <= upperTarget || elementRef.current.getBoundingClientRect().y >= lowerTarget ) {
      velocity.current = 0
    } else if (Math.abs(velocity.current) <= velocityMin) {
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
  }, [top, tap])

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
        onTouchEnd={handleTouchUp}
      >
        <Icon 
          icon="akar-icons:circle-chevron-up" 
          className="swipe" 
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

      <div className='subCard payMethods'>
        <p className='subCard-title'>Accepted Payments</p>
        <div className="creditCards">
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