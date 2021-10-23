import * as Styled from './StyledHeader'
import { NavLink } from "react-router-dom"
import { useEffect, useState, useRef } from "react";

export default function Header ({ children}) {

  return <> {children} </>
}

Header.Frame = ({ open, children}) => {
  return (
    <Styled.Frame open={open}>{children}</Styled.Frame>
  )
}

Header.Toggle = ({ open, onClick }) => {
  return (
    <Styled.Toggle open={open} onClick={onClick}>
      <div></div>
      <div></div>
      <div></div>
    </Styled.Toggle>
  )
}


Header.Title = ({children, mobile}) => {
  return (
    <Styled.PageTitle mobile={mobile}>{children}</Styled.PageTitle>
  )
}

Header.Nav = ({children}) => {
  return (
    <Styled.Nav>
      <ul>
        {children}
      </ul>
    </Styled.Nav>
  )
}

Header.Link = ({to, activeClassName, children }) => {
  return (
    <li>
      <Styled.SNavLink 
        to={to}
        activeClassName={activeClassName}
        exact
      >
        {children}
      </Styled.SNavLink>
    </li>

  )
}

Header.Cart = ({ to, children }) => (
  <li>
    <NavLink to={to}>
      <Styled.CartButton>{children}</Styled.CartButton>
    </NavLink>
  </li>
)



Header.DropDown = function DropDownComponent ({ title, active, onClick, children }) {
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
    setOpen(active === title)
  }, [active, title])

  useEffect(() => {
    if (open) {
      expand()
    } else {
      collapse()
    }
    return expand()
  }, [open])
  

  return ( 
    <Styled.StyledDropDown onClick={onClick}>
      <div>
        {title} 
        <Styled.StyledChevronDown open={open} size={24} />
      </div>
      <Styled.Dropper ref={dropper} open={open}>
        {children}
      </Styled.Dropper>
    </Styled.StyledDropDown>
  )

} 
 