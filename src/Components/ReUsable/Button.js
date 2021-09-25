import styled from 'styled-components'

const Button = styled.button`
  border-radius: 1.3em;
  padding: .5em 1em;
  border: none;
  background-color: ${props=>props.theme.color2};
  color: white;
` 

export default Button