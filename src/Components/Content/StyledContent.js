import styled from "styled-components"
import { Card } from "../ReUsable/Card"
import { Button } from "../ReUsable/Button"

export const Options = styled.div``

export const SortFilter = styled.div`
  position: fixed;
  transform: 
    ${({ open, x, y }) => {
      if (open) return `translateX(3em) translateY(0)  rotate(0) ` 
      else return `translateX(${x}) translateY(${y})  rotate(90deg) `
    }};
  transition: all .5s ease-in-out;

  h3 {
    background-color: ${({theme}) => theme.color3};
    margin: 0;
    padding: .2em .5em;
    border-radius: .7em .7em 0 0;
    display: inline-block;
    font-size: 1.5rem;
    transform: translateY(2px);
  }

  h4 {
    margin: 0 1em;
  }

  .option {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
  }

  .catHeader { 
    grid-row: 1 / 2;
    grid-column: 1 / 4;
  }

  .first {
    padding-top: 1em;
  }

  .optionContainer {
    border-radius: 0 .7em .7em .7em;
    background-color: ${({theme}) => theme.color3};
  }

  .subOption {
    padding: 1em;
    font-size: 1.2rem;
    }

`


export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Category = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  h2 {
    margin: 0;
    margin-bottom: 1em;
    background: rgba(255, 255, 255, 1);
    padding: 1em; 
    border-radius: 1.7em;
  }

`

export const Name = styled.h3`
  grid-area: name;
`

export const Image = styled.img`
  grid-area: image;
  min-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

export const InfoBox = styled.div`
  grid-area: info;
`

export const Price = styled.p``

export const Rating = styled.p``

export const MoreInfo = styled(Button)`
  grid-area: moreinfo;
`

export const AddCart = styled(Button)`
  grid-area: addcart;
`

export const ContentCard = styled(Card)`
  margin-bottom: 2em;
  width: 80vw;
  height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto auto auto;
  grid-row-gap: .7em;
  grid-template-areas: 
    "name name name"
    "image image image"
    "info moreinfo addcart";
  background-color: white;
`