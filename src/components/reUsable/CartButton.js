import { Button } from './Button'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledCartButton = styled(Button)`
  background-color: ${props=>props.theme.color1};
  a {
    text-decoration: none;
    color: white;

  }
`

export default function CartButton ({children, id}) {
  return (
    <StyledCartButton>
      <Link to={`/cart/${id}`}>
        {children}
      </Link>
    </StyledCartButton>
  )
}