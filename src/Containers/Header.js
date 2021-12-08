import Header from "../components/header/HeaderComponent"
import { useState } from "react"

export default function HeaderContainer ({ setSortFilterOption }) {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  const activeSwitch = (category) => {
    category === active ? setActive('') : setActive(category)
  }



  return (
    <Header>
      <Header.Toggle open={open} onMouseDown={() => setOpen(c => !c)} />
      <Header.Title mobile={true}>React E-Commerce</Header.Title>
      <Header.Frame setOpen={setOpen} open={open} >
        <Header.Title mobile={false}>React E-Commerce</Header.Title>
        <Header.Nav >

          <Header.Link
            to='/'  
            onClick={() => setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})}   
          >
            Home
          </Header.Link>
          <Header.Link
            to='/category/electronics'
            onClick={() => setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})}  
          >
            Electronics
          </Header.Link>
          <Header.Link
            to='/category/jewelery'
            onClick={() => setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})}  
          >
            Jewelry
          </Header.Link>

          <Header.DropDown onClick={() => activeSwitch('Clothing')} active={active} title="Clothing" >
            <Header.Link
              to="/category/men's clothing"
              onClick={() => setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})}  
            >
              Men's<br/>Clothing
            </Header.Link>
            <Header.Link
              to="/category/women's clothing"
              onClick={() => setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})}  
            >
              Women's<br/>Clothing
            </Header.Link>
            
          </Header.DropDown>

          <Header.Cart
            to="/cart"
            onClick={() => setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})}  
          >
            Cart
          </Header.Cart>
        </Header.Nav>
      </Header.Frame>
    </Header>
  )
}