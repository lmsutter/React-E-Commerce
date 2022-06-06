

import styled from 'styled-components'

import { Switch } from 'react-router-dom'

const StyledSwitch = styled(Switch)`
  overflow-x: hidden;

  @media (min-width: 970px) {
    flex-grow: 1;
  }
`

export default function SwitchStyled ({ children }) {
  return (
    <StyledSwitch>
      {children}
    </StyledSwitch>
  )
}