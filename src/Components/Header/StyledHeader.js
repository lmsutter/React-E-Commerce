import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import {Button} from '../ReUsable/Button'

export const HeaderDiv = styled.div`
  width: 100vw;
  display: flex;
  flex-direction: row;
  background: white;
  justify-content: space-between;
  align-items: center;
  height: 100px;
  /* overflow: hidden; */
`

export const Nav = styled.nav`
  ul:first-child {
    display: flex;
    list-style: none;
    align-items: center;
  }
  
`

export const PageTitle = styled.h1`
  font-size: 2.5rem;
`



export const CartButton = styled(Button)`
  background-color: ${ props  => props.theme.color1 };
  margin: 0 2em;
`

export const SNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 1.5em;
  font-size: 1.3rem;
`

