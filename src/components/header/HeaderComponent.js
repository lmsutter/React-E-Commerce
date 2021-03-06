import * as Styled from './HeaderStyled'
import { NavLink } from "react-router-dom"
import useClickOutside from '../../hooks/useClickOutside'
import { useEffect, useState, useRef } from "react";
import { StatisticUp } from 'akar-icons';

export default function Header ({ children, open, setOpen}) {
  const ref = useRef(null)  
  useClickOutside(ref, () => {
    open && setOpen(false)
  })
  return <Styled.Header ref={ref}> {children} </Styled.Header>
}

Header.Frame = function Frame ({ open, children})  {
  
  return (
    <Styled.Frame  open={open}>{children}</Styled.Frame>
  )
}

Header.Toggle = ({ open, onMouseDown }) => {
  return (
    <Styled.Toggle className='toggle' open={open} onMouseDown={onMouseDown}>
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

Header.Nav = ({children, open}) => {
  return (
    <Styled.Nav open={open}>
      <ul>
        {children}
      </ul>
    </Styled.Nav>
  )
}

Header.Link = ({to, children, onClick, onBlur }) => {
  return (
    <li>
      <Styled.SNavLink 
        to={to}
        activeClassName="active"
        onClick={onClick}
        exact
      >
        {children}
      </Styled.SNavLink>
    </li>

  )
}

Header.Cart = ({ to, children, onClick }) => (
  <li onClick={onClick}>
    <Styled.ButtonNavLink to={to}>
      {children}
    </Styled.ButtonNavLink>
  </li>
)



Header.DropDown = function DropDownComponent ({ title, active, onClick, children }) {
  const [open, setOpen] = useState(false)
  const dropper = useRef()
  const dropDown = useRef(null)

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

  function focusCheck (newFocus) {
    setOpen(previous => {
      if(dropDown.current.contains(newFocus)) {
        return previous
      }
      return false
    })
  }
  

  return ( 
    <Styled.StyledDropDown 
      ref={dropDown} 
      onClick={onClick} 
      onFocus={() => setOpen(true) } 
      onBlur={event => focusCheck(event.relatedTarget)}
    >
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
 