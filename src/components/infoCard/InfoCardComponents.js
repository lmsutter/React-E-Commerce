import { Link } from 'react-router-dom'
import { useState, useRef, useEffect } from 'react'
import * as Styled from './InfoCardStyled'

export default function InfoCardComponent ({children}) {
  return (
  <Styled.InfoCard>
    {children}
  </Styled.InfoCard>
  )
}

InfoCardComponent.CartConfirmationCard = function ({ children }) {
  return (
    <Styled.CartConfirmationCard>
      {children}
    </Styled.CartConfirmationCard>
  )
}

InfoCardComponent.Title = function ({ children }) {
  return (
    <Styled.Title>
      {children}
    </Styled.Title>
  )
}

InfoCardComponent.Image = function ({ children, src }) {
  return (
    <Styled.Image src={src}>
      {children}
    </Styled.Image>
  )
}

InfoCardComponent.Text = function ({ children }) {
  return (
    <Styled.Text>
      {children}
    </Styled.Text>
  )
}

InfoCardComponent.CConfirmationText = function ({ children }) {
  return (
    <Styled.CConfirmationText>
      {children}
    </Styled.CConfirmationText>
  )
}

InfoCardComponent.Price = function ({ children }) {
  return (
    <Styled.Price>
      {children}
    </Styled.Price>
  )
}
InfoCardComponent.QuantityTitle = function ({ children }) {
  return (
    <Styled.QuantityTitle>
      {children}
    </Styled.QuantityTitle>
  )
}

InfoCardComponent.AddCart = function ({ children } ) {
  return (
    <Styled.AddCart>
        + Cart
    </Styled.AddCart>
  )
}

InfoCardComponent.SimilarText = function ({ children }) {
  return (
    <Styled.SimilarText>
      {children}
    </Styled.SimilarText>
  )
}

InfoCardComponent.FullRating = function ({ children }) {
  return (
    <Styled.FullRating>
      {children}
    </Styled.FullRating>
  )
}

InfoCardComponent.Description = function ({ children }) {
  return (
    <Styled.Description>
      {children}
    </Styled.Description>
  )
}

InfoCardComponent.Quantity = function DropDown ({ children, setQuantity }) {

  const [open, setOpen] = useState(false)
  const dropper = useRef()

  const collapse = () => {
    let sectionHeight = dropper.current.scrollHeight
    let elementTransition = dropper.current.style.transition
    dropper.current.style.transition = ''
    requestAnimationFrame(() => {
      dropper.current.style.height = sectionHeight + 'px'
      dropper.current.style.transition = elementTransition
      requestAnimationFrame(() => {
        dropper.current.style.height = 0 + 'px'
      })
    })
  }

  
  const expand = () => {
    let sectionHeight = dropper.current.scrollHeight
    dropper.current.style.height = sectionHeight + 'px'  
  }

  useEffect(() => {
    if (open) {
      expand()
    } else { 
      collapse()
    }
    return expand()
  }, [open])

  return (
    <>
      <Styled.QuantityFrame onClick={() => setOpen(c => !c)} open={open}>
        <Styled.BlueButton >{children} <span className="arrow">^</span></Styled.BlueButton>
        <div className="optionFrame" ref={dropper}>
          <Styled.BlueButton onClick={() => setQuantity(1)} className="option">1</Styled.BlueButton>
          <Styled.BlueButton onClick={() => setQuantity(2)} className="option">2</Styled.BlueButton>
          <Styled.BlueButton onClick={() => setQuantity(3)} className="option">3</Styled.BlueButton>
          <Styled.BlueButton onClick={() => setQuantity(4)} className="option">4</Styled.BlueButton>
          <Styled.BlueButton onClick={() => setQuantity(5)} className="option">5</Styled.BlueButton>
          
        </div>
      </Styled.QuantityFrame>

    </>
  )
}



InfoCardComponent.SuggestionsBox = function ({ children }) {
  return (
    <Styled.SuggestionsBox>
      {children}
    </Styled.SuggestionsBox>
  )
}

InfoCardComponent.SuggestionsImage = function ({ children, src }) {
  return (
    <Styled.SuggestionsImage src={src}>
      {children}
    </Styled.SuggestionsImage>
  )
}

InfoCardComponent.SuggestionsLink = function ({ children, category, item }) {
  return (
    <Styled.SuggestionsLink>
      <Link to={`/category/${category}/${item}`}>
      {children}
      </Link>
    </Styled.SuggestionsLink>
  )
}