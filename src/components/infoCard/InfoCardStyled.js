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
    "details buttons buttons"
    "description description description"
    "similarText similarText . "
    "similar similar similar";

  grid-row-gap: 1em;
  grid-column-gap: 1em;


  .buttons {
    grid-area: buttons;
    display: flex;
    flex-direction: row;
    justify-self: start;
  }


  @media (min-width: 970px) {
    grid-template-columns: 50% 50%;
    grid-template-rows: repeat(5, auto);
    grid-template-areas: 
      "image name"
      "image details"
      "image description"
      "image buttons"
      "image similarText"
      "image similar" ;
    grid-row-gap: 1.5em;
    grid-column-gap: 1.5em;
    padding: 1.5em;

  }

`

export const CartConfirmationCard = styled(Card)`
  margin: 2em auto;
  padding: 1.5em;
  width: 630px;

  .checkMark {
    margin-right: .4em;
  }
`

export const Title = styled(Content.Name)`
  grid-area: name;

  @media (min-width: 970px) {
    background-color: unset;
    color: black;
    font-size: 24px;
    margin: 0;
    padding: 0;
  }
`

export const Image = styled.img`
  grid-area: name-start / name-start / image-end / image-end;
  min-width: 100%;
  height: 100%;
  aspect-ratio: 1 /1;
  object-fit: cover;
  object-position: top;
  @media (min-width: 970px) {
    grid-area: image;
  }
`

export const Text = styled.p``

export const CConfirmationText = styled.p`
  margin: 1em 0;
`

export const Price = styled.p`
  grid-area: details;
`
export const QuantityTitle = styled(Price)`
  opacity: 0;

  @media (min-width: 970px) {
    opacity: 1;
    align-self: center;
  }
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


export const BlueButton = styled(Button)``

export const QuantityFrame = styled.div`
  grid-area: quantityBtn;  
  position: relative;
  align-self: center;

  .arrow {
    display: inline-block;
    transition: transform .2s linear;
    transform: ${({open}) => open && 'rotateX(180deg)'};
  }

  .optionFrame {
    position: absolute;
    top: 3em;
    right: 0;
    z-index: 2;
    
  }

  ${BlueButton}.option {
    transition: height .3s linear, opacity .3s ease-in;
    position: relative;
    right: -1em;
    margin-bottom: 5px;
    opacity: ${({open}) => open ? "1" : "0"};
    height: ${({open}) => open ? "2.5em" : "0"};
  } 

  @media (min-width: 970px) {
    margin: 0 1.5em;

    .optionFrame {
      display: flex;
      flex-direction: column;
      left: 0;
      right: unset;
      
    }
  }
  //added this additionally here to always have the frame hidden while full closed
  .optionFrame {
    display: ${({open}) => open ? 'block' : 'none'};
  }

`


export const AddCart = styled(Button)`
  background-color: ${({theme}) => theme.color1};
  align-self: center;
  &:hover {
    cursor: pointer;
  }
`


export const SuggestionsBox = styled.div`
  grid-area: similar;
  height: 20%;
  display: flex;
  flex-direction: row;
  overflow-x: auto;
  overflow-y: auto;
  height: 200px;
  margin-right: 1em;

  .suggestionItem {
    position: relative;
    min-height: 100%;
    max-width: 200px;
    margin-right: 1em;
  }

  .suggestionItem:last-of-type {
    margin: 0;
  }


`

export const SuggestionsImage = styled.img`
  height: 90%;
  min-width: 180px;
  width: 100%;
  object-fit: cover;

  @media (min-width: 1320px) {
    min-width: 160px;
  }
`

export const SuggestionsLink = styled(Content.Name)`
  position: absolute;
  left: 0;
  top: 0;
  padding: .5em;

  a {
    font-size: 12px;
    color: white;
    text-decoration: none;
  }
`


