import styled from 'styled-components'
import { Card } from '../reUsable/Card'
import { Button } from '../reUsable/Button'
import * as Content from '../../components/content/ContentStyled'

export const InfoCard = styled(Card)`
  
  background-color: ${({theme}) => theme.lightgrey};
  width: 1200px;
  max-width: 90%;
  margin: 2em;
  display: flex; 
  flex-direction: column;
  margin: 2em auto;

  --widthCalc: calc((100% - 2em)/3);
  display: grid;
  grid-template-columns: repeat(3, var(---widthCalc));
  grid-template-rows: auto;
  grid-template-areas: 
    "name name name"
    "image image image"
    "details quantity cart"
    "description description description"
    "similarText similarText . "
    "similar similar similar";

  grid-row-gap: 1em;
  grid-column-gap: 1em;
`

export const Title = styled(Content.Name)`
  grid-area: name;
`

export const Image = styled.img`
  grid-area: name-start / name-start / image-end / image-end;
  min-width: 100%;
  height: 100%;
  aspect-ratio: 1 /1;
  object-fit: cover;
  object-position: top;
`

export const Price = styled.p`
  grid-area: details;
`
export const QuantityTitle = styled(Price)`
  opacity: 0;
`

export const SimilarText = styled(Price)`
  grid-area: similarText;
`


export const FullRating = styled.div`
  grid-area: details;
  margin-top: 1.3em;
`

export const Description = styled.p`
  grid-area: description;
`

export const Quantity = styled(Button)`
  grid-area: quantity;
`

export const CartButton = styled(Button)`
  grid-area: cart;
  background-color: ${({theme}) => theme.color1}
`

export const SuggestionsBox = styled.div`
  grid-area: similar;
  height: 20%;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
  overflow-y: auto;
  height: 200px;

  .suggestionItem {
    position: relative;
    min-width: 200px;
  }
`

export const SuggestionsImage = styled.img`
  max-height: 90%;
`

export const SuggestionsLink = styled(Content.Name)`
  position: absolute;
  left: 0;
  top: 0;
  padding: .5em;

  a {
    font-size: 16px;
    color: white;
    text-decoration: none;
  }
`



