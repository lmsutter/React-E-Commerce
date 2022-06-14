import styled from "styled-components"
import { BallTriangle } from 'svg-loaders-react'


const StyledLoading = styled.div`
  display: flex; 
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin-bottom: 2em;
  flex-grow: 1;

  svg {
    height: 150px;
    width: auto;
  }
`

export const Loading = function Frame ({ children }) {
  return (
    <StyledLoading>
      <BallTriangle fill="#fff" color="#fff" />
      {children}
    </StyledLoading>
  )
}