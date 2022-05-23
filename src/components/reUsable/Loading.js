import styled from "styled-components"
import { BallTriangle } from 'svg-loaders-react'


const StyledLoading = styled.div`
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