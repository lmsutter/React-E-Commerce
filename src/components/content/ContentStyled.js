import styled from "styled-components"
import { Card } from "../reUsable/Card"
import { Button } from "../reUsable/Button"

export const Options = styled.div`
  @media (min-width: 600px) {
    display: flex;
    flex-direction: row;
    width: 100vw;
    justify-content: space-around;
    background-color: #fff;
  }

  @media (max-width: 1278px) {
    flex-direction: column;
    align-items: center;
  }
`

export const SortFilter = styled.div`
  position: fixed;
  top: 7em; 
  left: 0;
  z-index: 10;
  width: 335px;

  transform: 
    ${({ open, y }) => {
      if (open) return `translateX(3em) translateY(0)  rotate(0) ` 
      else return `translateX(-297px) translateY(${y})  rotate(90deg) `
    }};
  transition: all .5s ease-in-out;

  h2 {
    background-color: ${({theme}) => theme.color3};
    margin: 0;
    padding: .2em .5em;
    border-radius: .7em .7em 0 0;
    display: inline-block;
    font-size: 1.5rem;
    transform: translateY(2px);
  }

  h2:hover,
  h2:focus {
    cursor: pointer;
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
    margin: 0 1em;
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

  .none:hover {
    cursor: pointer;
  }

  div.activeSF {
    display: inline-block;
    position: absolute;
    content: '';
    width: .7em;
    height: .7em;
    background-color: ${({theme}) => theme.color2};
    border-radius: 5em;
    margin-left: .2em;
    transform: translateY(40%);
  }

  @media (min-width: 970px) {
    transform: unset;
    position: static;
    width: initial;
    display: flex;
    flex-direction: row;
    align-items: center;
    background-color: #fff;
    z-index: 0;

    h2 {
      background-color: #fff;
      margin-right: 1em;
    }

    h2:hover,
    h2:focus {
      cursor: default;
    }

    .catHeader {
      background-color: #fff;
      margin: 0;
      justify-self: center;
      text-align: center;
      grid-column: 1 / 3;
    }

    .optionContainer {
      display: flex;
      flex-direction: row;
      background-color: #fff;
    }

    .first {
      padding-top: 0;
      grid-row: 1 / 3;
      align-self: center;
      margin: 0 1em;
    }

    .subOption {
      padding: .7em;
      font-size: 1em;
    }
    
  }

  @media (max-width: 1278px) {
    margin-top: 1em;
  }
`


export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-grow: 1;

  @media (min-width: 600px) {
    flex-direction: row;
    flex-wrap: wrap;
    max-width: 86vw;
    overflow-y: auto;
    margin: 0 auto;
    justify-content: center;
  }
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
    box-shadow: 0 0 15px 3px rgba(20, 20, 20, .2);
  }
  
  @media (min-width: 600px) {
    margin-top: 2em;
  }
  `

export const ContentCard = styled(Card)`
  margin-bottom: 2em;
  width: 80vw;
  max-height: 300px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto 1fr auto;
  grid-row-gap: .7em;
  grid-template-areas: 
    "name name name"
    "image image image"
    "info moreinfo addcart";
  background-color: white;
  box-shadow: 0 0 15px 3px rgba(20, 20, 20, .2);

  @media (min-width: 600px) {
    width: 450px;
    height: 450px;
    max-width: 450px;
    max-height: 450px;
    margin: 2em;
  }
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
  min-height: 100%;
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
  a {
    color: #fff;
    text-decoration: none;
  }
`

export const AddCart = styled(Button)`
  grid-area: addcart;
  background-color: ${({theme}) => theme.color1};
  place-self: center;
  &:hover {
    cursor: pointer;
  }
`

