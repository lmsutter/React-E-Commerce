import { Link } from 'react-router-dom'
import * as Styled from './InfoCardStyled'

export default function InfoCardComponent ({children}) {
  return (
  <Styled.InfoCard>
    {children}
  </Styled.InfoCard>
  )
}

InfoCardComponent.Title = function ({ children }) {
  return (
    <Styled.Title>
      {children}
    </Styled.Title>
  )
}

InfoCardComponent.Image = function ({ children, src }) {
  return (
    <Styled.Image src={src}>
      {children}
    </Styled.Image>
  )
}

InfoCardComponent.Price = function ({ children }) {
  return (
    <Styled.Price>
      {children}
    </Styled.Price>
  )
}
InfoCardComponent.QuantityTitle = function ({ children }) {
  return (
    <Styled.QuantityTitle>
      {children}
    </Styled.QuantityTitle>
  )
}
InfoCardComponent.SimilarText = function ({ children }) {
  return (
    <Styled.SimilarText>
      {children}
    </Styled.SimilarText>
  )
}

InfoCardComponent.FullRating = function ({ children }) {
  return (
    <Styled.FullRating>
      {children}
    </Styled.FullRating>
  )
}

InfoCardComponent.Description = function ({ children }) {
  return (
    <Styled.Description>
      {children}
    </Styled.Description>
  )
}

InfoCardComponent.Quantity = function ({ children }) {
  return (
    <Styled.Quantity>
      {children}
    </Styled.Quantity>
  )
}

InfoCardComponent.CartButton = function ({ children }) {
  return (
    <Styled.CartButton>
      {children}
    </Styled.CartButton>
  )
}

InfoCardComponent.SuggestionsBox = function ({ children }) {
  return (
    <Styled.SuggestionsBox>
      {children}
    </Styled.SuggestionsBox>
  )
}

InfoCardComponent.SuggestionsImage = function ({ children, src }) {
  return (
    <Styled.SuggestionsImage src={src}>
      {children}
    </Styled.SuggestionsImage>
  )
}

InfoCardComponent.SuggestionsLink = function ({ children, category, item }) {
  return (
    <Styled.SuggestionsLink>
      <Link to={`/category/${category}/${item}`}>
      {children}
      </Link>
    </Styled.SuggestionsLink>
  )
}