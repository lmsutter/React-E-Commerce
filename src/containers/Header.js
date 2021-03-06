import Header from "../components/header/HeaderComponent"
import { useState } from "react"

export default function HeaderContainer ({ setSortFilterOption }) {
  const [active, setActive] = useState('')
  const [open, setOpen] = useState(false)

  const activeSwitch = (category) => {
    category === active ? setActive('') : setActive(category)
  }



  return (
    <Header open={open} setOpen={setOpen}>
  

      <Header.Toggle open={open} onMouseDown={() => {
        setOpen(c => !c)} 
      }
        />
      <Header.Title mobile={true}>React E-Commerce</Header.Title>
      <Header.Frame open={open} setOpen={setOpen} >
        <Header.Title mobile={false}>React E-Commerce</Header.Title>
        <Header.Nav open={open}>

          <Header.Link
            to='/'  
            onClick={() => {
              setOpen(false)
              setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})
            }}   
          >
            Home
          </Header.Link>
          <Header.Link
            to='/category/electronics'
            onClick={() => {
              setOpen(false)
              setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})
            }}  
          >
            Electronics
          </Header.Link>
          <Header.Link
            to='/category/jewelery'
            onClick={() => {
              setOpen(false)
              setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})
            }}  
          >
            Jewelry
          </Header.Link>

          <Header.DropDown onClick={() => activeSwitch('Clothing')} active={active} title="Clothing" >
            <Header.Link
              to="/category/men's clothing"
              onClick={() => {
                setOpen(false)
                setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})
              }}  
            >
              Men's<br/>Clothing
            </Header.Link>
            <Header.Link
              to="/category/women's clothing"
              onClick={() => {
                setOpen(false)
                setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})
              }}  
            >
              Women's<br/>Clothing
            </Header.Link>
            
          </Header.DropDown>

          <Header.Cart
            to="/cart"
            onClick={() => {
              setOpen(false)
              setSortFilterOption({sortOption: 'none', sortValue: 'none', filterOption: 'none', filterValue: 'none'})
            }}  
          >
            Cart
          </Header.Cart>
        </Header.Nav>
      </Header.Frame>
    </Header>
  )
}