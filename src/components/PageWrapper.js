

import styled from 'styled-components'

const StyledWrapper = styled.div`
  overflow-x: hidden;

  @media (min-width: 970px) {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 100vh;
  }
`

export default function Wrapper ({ children }) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}