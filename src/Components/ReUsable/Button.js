import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 2em;
  padding: .5em 1em;
  border: none;
  background-color: ${props=>props.theme.color2};
  color: white;
  font-size: 1.2rem;
  backface-visibility: hidden;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
` 
