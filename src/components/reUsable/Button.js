import styled from 'styled-components'

export const Button = styled.button`
  border-radius: 2em;
  padding: .5em 1em;
  border: none;
  background-color: ${props=>props.theme.color2};
  color: white;
  font-size: 1.1rem;

  &:hover {
    cursor: pointer;
    transform: scale(1.1);
  }
` 
