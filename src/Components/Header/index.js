import * as Styled from './StyledHeader'

export default function Header ({children}) {
  return <> {children} </>
}

Header.Frame = ({children}) => {
  return (
    <Styled.HeaderDiv>{children}</Styled.HeaderDiv>
  )
}


Header.Title = ({children}) => {
  return (
    <Styled.PageTitle>{children}</Styled.PageTitle>
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

Header.Cart = () => (
  <li>
    <Styled.CartButton as="NavLink" to="/cart">Cart</Styled.CartButton>
  </li>
)


 