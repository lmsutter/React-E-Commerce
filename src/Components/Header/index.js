import * as Styled from './StyledHeader'

export default function Header () {
  return (
    <Styled.HeaderDiv>
      <Styled.PageTitle>React Page</Styled.PageTitle>
      <Styled.Nav>
        <ul>
          
            <Styled.SNavItem to="/">Home</Styled.SNavItem>
          
          {/* <li>
            <Styled.SNavItem 
            to="/category/mens-clothing"
            
            >
              Men's Clothing
            </Styled.SNavItem>
          </li>
          <li>
            <Styled.SNavItem>
              Link 
            </Styled.SNavItem>
          </li>
          <li>
            <Styled.CartButton as="NavLink" to="/cart">Cart</Styled.CartButton>
          </li> */}

        </ul>
      </Styled.Nav>
    </Styled.HeaderDiv>

  )
}
 