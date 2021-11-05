import styled from 'styled-components'
import { NavLink } from 'react-router-dom'
import { Button } from '../reUsable/Button'
import { ChevronDown } from 'akar-icons'

const height = '100px'

export const Toggle = styled.div`
  position: fixed;
  top: 15px;
  right: 15px;
  z-index: 1;

  div {
    content: '';
    width: 30px;
    height: 3px;
    background-color: black;
    margin: 8px 0;
  }

  div:first-of-type {
    transform: ${({open}) => open ? ' translateY(5px) rotate(45deg)' : 'rotate(0)'};
    transition: transform .2s ease-in;
  }

  div:nth-of-type(2) {
    transform: ${({open}) => open ? 'translateY(-5px) rotate(-45deg) ' : 'rotate(0)'};
    transition: transform .2s ease-in;
  }

  div:last-of-type {
    display: ${({open})=> open ? 'none' : 'block'}
  }

  @media (min-width: 600px) {
    display: none;
  }
`

export const Frame = styled.div`

  transform: ${({open})=> open ? 'translateX(0)' : 'translateX(100%)'};
  transition: transform .2s ease-in;
  display: flex;
  flex-direction: column;
  background: white;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 0; 
  right: 0;
  height: 100vh;
  box-sizing: border-box;

 @media (min-width: 970px) {
   flex-direction: row;
   height: ${() => height};
   width: 100vw; 
   position: static;
   justify-content: space-between;
   transform: translateX(0);

 }
`

export const Nav = styled.nav`
  height: 100%;
 

  ul:first-child {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    list-style: none;
    align-items: center;
    padding-left: 0;
    margin: 0;

    li {
      font-size: 1.3rem;
      width: 100%;
      text-align: center;
      box-sizing: border-box;
    }
  }

  @media (min-width: 970px) {
    li {
      display: block; 
      margin-right: 1.5em;
    }
    ul:first-child {
      flex-direction: row;

    }
    
  }
  
`

export const PageTitle = styled.h1`
  font-size: 1.7rem;
  margin: 1em;
  display: ${({mobile}) => mobile ? 'block' : 'none'};
  @media (min-width: 970px) {
    font-size: 2.5rem;
    display: ${({mobile}) => mobile ? 'none' : 'inline'};
    margin-left: 1em;
  }
`

export const CartButton = styled(Button)`
  background-color: ${ props  => props.theme.color1 };
  margin: 0 2em;
  font-size: 1.3rem;
`

export const SNavLink = styled(NavLink)`
  color: black;
  text-decoration: none;
  margin: 0 ;
  position: relative;
  display: inline-block;

  &:before {
    content: '';
    width: 80%;
    transform: scaleX(0);
    transition: transform .2s ease-in;
    transform-origin: left;
    height: 5px;
    background-color: ${({ theme }) => theme.color2};
    bottom: 0;
    left: 0;
    position: absolute;
  }
  
  &.active:before,
  &:hover&:before {
    transform: scaleX(100%);
  }
`


export const Dropper = styled.ul`

  ${({ children, open }) => {
    let items = [...children]
    let string = ''
    if (open) {
      return null
    } else {
      items.forEach((item, index) => {
        let offset = 1 + index
        string += `
        & > li:nth-child(${offset}) {
          transform: translateX(${offset * 4}em);
          transition: transform .3s ease-in;
        }`
      }) 
      return string
    }
  }}

  & li {
    margin: 0;
    display: block;
    transform: translateX(0);
    transition: transform .3s ease-in;
    min-width: 100%;
    border-bottom: 2px solid rgb(230, 230, 230);
  }
  
  
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  transition: height .3s ease-in;
  height: 0;

  @media (min-width: 970px) {
    li {
      padding: .5em 1em;
      background: white;
    }
    
  }
  `


export const StyledDropDown = styled.li`
  @media (min-width: 970px) {
    height: ${()=>height};
 
    div {
      height: ${()=>height};
      display: flex;
      align-items: center;
      justify-content: center;
    }
   
  }
`

export const StyledChevronDown = styled(ChevronDown)`
  transform: ${({ open }) => open ? 'translateY(5px)' : 'translateY(5px) rotate(180deg)'};
  transition: transform .3s ease-in;
`