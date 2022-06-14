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

  display: grid;
  grid-template-columns: 1fr 2fr 2fr;
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

  .flip-enter {
    opacity: 0;
  }
  
  .flip-enter-active {
    opacity: 1;
    transition: opacity 500ms;
  }

  .flip-exit {
    opacity: 1
  }

  .flip-exit-active {
    opacity: 0;
    transition: opacity 500ms;

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

export const FullCard = styled.section`
  position: absolute;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: rgba(20, 20, 20, .7);
  z-index: 4;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  padding: 10vh;

  @media (min-width: 970px) {
    flex-direction: row;
  }
`

export const FullExit = styled.button`
  align-self: start;
  font-size: 2rem;
  margin-right: 2em;
  margin-bottom: 2em;
  padding: 6px;
  border-radius: 5px;
  border: none;  
`

export const FullImg = styled.img`
  width: 90vw;
  height: auto;
  max-height: 90vh;
  max-width: 90vw;
  border-radius: 0;

  .flip-enter & {
    transform: scale(.7) translateX(-30%);

  }

  .flip-enter-active & {
    transform: scale(1) translateX(0);
    transition: transform 500ms;
  }

  .flip-exit & {
    transform: scale(1) ;

  }

  .flip-exit-active & {
    transform: scale(.7) translateX(-30%);
    transition: transform 500ms;
  }

  &:hover {
    cursor: zoom-out;
  }
`



export const CartConfirmationCard = styled(Card)`
  margin: 2em auto;
  padding: 1.5em;
  width: 630px;
  max-width: 90%;

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
  &:hover {
    cursor: zoom-in;
  }

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
  margin-left: .7em;
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
  display: ${({flipped}) => flipped ? 'none' : ''};

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



