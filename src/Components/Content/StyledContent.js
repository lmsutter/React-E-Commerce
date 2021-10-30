import styled from "styled-components"
import { Card } from "../ReUsable/Card"
import { Button } from "../ReUsable/Button"

export const Options = styled.div``

export const SortFilter = styled.div`
  position: fixed;
  top: 7em; 
  left: 0;
  width: 335px;

  transform: 
    ${({ open, x, y }) => {
      if (open) return `translateX(3em) translateY(0)  rotate(0) ` 
      else return `translateX(-280px) translateY(${y})  rotate(90deg) `
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

  h3:hover,
  h3:focus {
    cursor: pointer;
  }

  h4 {
    margin: 0 1em;
  }

  .sort .option {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto;
  }

  .filter .option {
    display: grid;
    grid-template-rows: auto auto;
    grid-template-columns: auto auto auto;
  }

  .catHeader { 
    grid-row: 1 / 2;
  }

  .first {
    padding-top: 1em;
  }

  .optionContainer {
    border-radius: 0 .7em .7em .7em;
    background-color: ${({theme}) => theme.color3};
    /* display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center; */
  }

  .subOption {
    padding: 1em;
    font-size: 1.2rem;
    }

  .subOption:hover,
  .subOption:focus {
    cursor: pointer;
  }

  .sort .subOption {
    grid-row: 2 / 3;
  }

  .filter .subOption {
    grid-row: 2 / 3;
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
  box-shadow: 0 0 15px 3px rgba(20, 20, 20, .3);
`

export const Name = styled.h3`
  grid-area: name;
  color: white;
  background-color: rgba(23, 23, 23, .5);
  margin: .5em .5em;
  padding: 1em;
  border-radius: 1.5em;
`

export const Image = styled.img`
  grid-area: name-start / name-start / image-end / image-end;
  min-width: 100%;
  max-height: 100%;
  object-fit: cover;
`

export const InfoBox = styled.div`
  grid-area: info;
  margin-left: 1em;
`

export const Price = styled.p`
  margin-bottom: .3em;
`

export const Rating = styled.p``

export const MoreInfo = styled(Button)`
  grid-area: moreinfo;
  place-self: center;
`

export const AddCart = styled(Button)`
  grid-area: addcart;
  background-color: ${({theme}) => theme.color1};
  place-self: center;
`

