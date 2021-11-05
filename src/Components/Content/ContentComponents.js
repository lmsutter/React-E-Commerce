import * as Styled from './ContentStyled' 
import { Link } from 'react-router-dom'

export default function Content ({children}) {
  return <> {children} </>
}

Content.Options = function Options ({ children }) {
  return (
    <Styled.Options>
      {children}
    </Styled.Options>
  )
}

Content.SortFilter = function SortFilter ({ onClick, open, x, y, children }) {
  return (
    <Styled.SortFilter onClick={onClick} y={y} x={x} open={open}>
      {children}
    </Styled.SortFilter>
  )
}

Content.Frame = function Frame ({ children }) {
  return (
    <Styled.Frame>
      {children}
    </Styled.Frame>
  )
}

Content.Category = function Category ({children}) {
  return <Styled.Category>{children}</Styled.Category>
}

Content.Name = function Name ({children}) {
  return <Styled.Name>{children}</Styled.Name>
}

Content.Image = function Image ({ children, src }) {
  return (
    <Styled.Image src={src}>
      {children}
    </Styled.Image>
  )
}

Content.InfoBox = function InfoBox ({children}) {
  return (<Styled.InfoBox>{children}</Styled.InfoBox>)
}

Content.Price = function Price ({ children }) {
  return (
    <Styled.Price>
      {children}
    </Styled.Price>
  )
}

Content.Rating = function Rating ({ children }) {
  return (
    <Styled.Rating>
      {children}
    </Styled.Rating>
  )
}

Content.MoreInfo = function MoreInfo ({ category, children, item}) {
  return (
    <Styled.MoreInfo>
      <Link to={`/category/${category}/${item}`}>
        <span>+ </span>
        <span>Info</span>
      </Link>
    </Styled.MoreInfo>
  )
}

Content.AddCart = function AddCart ({ children }) {
  return (
    <Styled.AddCart>
      <span>+ </span>
      <span>Cart</span>
    </Styled.AddCart>
  )
}

Content.ContentCard = function ContentCard ({ children }) {
  return (
    <Styled.ContentCard>
      {children}
    </Styled.ContentCard>
  )
}
