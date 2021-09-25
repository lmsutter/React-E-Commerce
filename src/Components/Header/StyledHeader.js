import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import Button from '../ReUsable/Button'

export const HeaderDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: space-between;
  align-items: center;
`

  export const Nav = styled.nav`
    ul {
      display: flex;
      justify-content: row;
      list-style: none;
      align-items: center;
    }
    
  `

export const PageTitle = styled.h1`
  font-size: 2.5rem;
`

const CondNavItem = ({ children, to }) => {
  return (
    <li>
      {/* <NavLink
        isActive={(match) => match && true}
        to={to}
      >
        {children}
      </NavLink> */}
      {children}
    </li>
  )
}

export const SNavItem = styled(CondNavItem)`
  color: red;
  border: 3px solid red;

  div {
    border: 2px solid black;
    color: red;
    background-color: blue;

  }

`

export const CartButton = styled(Button)`
  background-color: ${ props  => props.theme.color1 };
  margin-right: 2em;
`
