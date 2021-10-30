import Header from "../Components/Header"
import { useState } from "react"

export default function HeaderContainer () {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)


  const activeSwitch = (category) => {
    category === active ? setActive('') : setActive(category)
  }



  return (
    <Header>
      <Header.Toggle open={open} onClick={() => setOpen(c => !c)} />
      <Header.Title mobile={true}>React E-Commerce</Header.Title>
      <Header.Frame setOpen={setOpen} open={open} >
        <Header.Title mobile={false}>React E-Commerce</Header.Title>
        <Header.Nav >

          <Header.Link
            to='/'     
          >
            Home
          </Header.Link>
          <Header.Link
            to='/category/electronics'
          >
            Electronics
          </Header.Link>
          <Header.Link
            to='/category/jewelery'
          >
            Jewelry
          </Header.Link>

          <Header.DropDown onClick={() => activeSwitch('Clothing')} active={active} title="Clothing" >
            <Header.Link
              to="/category/men's-clothing"
            >
              Men's<br/>Clothing
            </Header.Link>
            <Header.Link
              to="/category/women's-clothing"
            >
              Women's<br/>Clothing
            </Header.Link>
            
          </Header.DropDown>

          <Header.Cart
            to="/cart"
          >
            Cart
          </Header.Cart>
        </Header.Nav>
      </Header.Frame>
    </Header>
  )
}