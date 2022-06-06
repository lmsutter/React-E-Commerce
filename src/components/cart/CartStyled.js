import styled from "styled-components";
import { Card } from "../reUsable/Card";

export const Frame = styled.section`
  @media (min-width: 600px) {
    display: flex; 
    flex-direction: row;
    max-width: 800px;
    margin: 1em auto;
  }
` 

export const CartCard = styled(Card)`
  background-color: rgba(0, 0, 0, 0);
  box-shadow: none;
  
  @media (min-width: 600px) {
    align-self: flex-start;
    background-color: rgba(255, 255, 255, 1);
    margin-right: 1.5em;
    box-shadow: 0 0 20px 5px rgba(50, 50, 50, .35);
  }
`

export const CartItem = styled.div`
  height: 120px;
  margin-bottom: 1em;
  padding: .5em;
  border-radius: 1.5em;
  width: 100%;
  position: relative;

  display: grid;
  grid-template-columns: 1fr 2fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  grid-template-areas: 
    'image title count'
    'image costs count'
    'image costs count';

  .delete {
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

  .delete:hover {
    cursor: pointer;
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

    button:hover {
      cursor: pointer;
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
  position: fixed;
  z-index: 1;
  top: ${({top}) => top + 'px'};
  touch-action: none;
  left: 50%;
  transform: translateX(-50%);
  width: min(80vw, 350px);
 

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

  .subCard.payMethods {
    padding: 1em;
  }

  .subCard-title {
    text-align: center;
  }

  .creditCards {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: .5em;

    svg {
      font-size: 2em;
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

  .placeOrder {
    margin: .7em auto 0 auto;
    border-radius: 40px;
    width: 100%;
    height: 3em;
  }

  @media (min-width: 600px) {
    position: static;
    z-index: 0;
    transform: unset;
    align-self: flex-start;
    width: 400px;

    .swipe {
      display: none;
    }

    .totalInfo p:nth-child(2) {
      width: 70px;
      display: inline-block;
      text-align: right;
    }

  }
`


