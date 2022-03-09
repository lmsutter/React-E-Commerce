import styled from "styled-components";
import { Card } from "../reUsable/Card";

export const Frame = styled.section`

` 

export const CartCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
`

export const CartItem = styled.div`
  height: 120px;
  margin-bottom: 1em;
  padding: .5em;
  border-radius: 1.5em;
  width: 90vw;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    'image title count'
    'image costs count'
    'image costs count';

  .exit {
    position: absolute;
    top: 10px;
    left: 10px;
    border: none;
    background-color: transparent;
    color: black;
    font-weight: bold;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 50%;
    height: 18px;
    aspect-ratio: 1/1;
  }

  img {
    grid-area: image;
    height: 100%;
    object-fit: cover;
    object-position: top;
    border-radius: 1em;
  }

  h2 {
    font-size: .9em;
    grid-area: title;
    
  }

  .costs {
    grid-area: costs;
    align-self: end;
    
  }

  .count {
    grid-area: count;
    display: flex; 
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;

    * {
      border-radius: 50%;
      font-weight: bold;
      border: none;
      width: 30px;
      height: 30%;
      aspect-ratio: 1/1;
    }

    button {
      svg {
        height: 100%;
        color: ${({theme}) => theme.color1}
      }
      
    }

    .quantity {
      background-color: white;
      display: flex;
      align-items: center;
      padding: .7em;
    }

    
  }


  background-color: #ECECEC;
`

export const CartTotal = styled(Card)`
  /* margin: 1em; */
  position: fixed;
  /* bottom: 0px; */
  /* transform: ${({slideDiff}) => (`translateY(${slideDiff}px)`)}; */
  top: ${({top}) => top + 'px'};
  touch-action: none;

  .subCard {
    background-color: #E5E5E5;
    padding: .5em 1em 1em; 
    border-radius: 26px;
  }

  .subCard:first-of-type {
    margin-bottom: 1em;
  }

  .totalInfo {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-bottom: 1px solid black;
    padding: .8em 0;

    p:first-of-type {
      font-weight: bold;
    }
  }

  .swipe {
    position: absolute;
    top: -.8em;
    left: 50%;
    transform: translateX(-50%);
    font-size: 3em;
    touch-action: none;
  }

`


