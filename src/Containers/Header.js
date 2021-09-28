import Header from "../Components/Header"
import  DropDown  from "../Components/ReUsable/Dropdown/index"

export default function HeaderContainer () {
  return (
    <Header>
      <Header.Frame>
        <Header.Title>React Page</Header.Title>
        <Header.Nav>
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
            to='/category/jewelry'
          >
            Jewelry
          </Header.Link>

          <DropDown
            title="Clothing"
          >
            <Header.Link
              to='/category/electronics'
            >
              Electronics
            </Header.Link>
            <Header.Link
              to='/category/jewelry'
            >
              Jewelry
            </Header.Link>
            <DropDown
              title="OtherCategory"
            >
              <h3>Option 1</h3>
              <h3>Option 2</h3>
            </DropDown>
          </DropDown>

        </Header.Nav>
      </Header.Frame>
    </Header>
  )
}