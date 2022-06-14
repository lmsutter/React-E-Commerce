

import styled from 'styled-components'

const StyledWrapper = styled.div`
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  min-height: 100vh;
  & main {
    flex-grow: 1;
  }

`

export default function Wrapper ({ children }) {
  return (
    <StyledWrapper>
      {children}
    </StyledWrapper>
  )
}