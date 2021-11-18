import styled from 'styled-components'

export const Frame = styled.div`
  background-color: #F2F2F2;
  min-width: 100vw;
  padding: 1.5em;
`

export const Title = styled.h2`
`

export const Section = styled.div`
  display: flex;
  flex-direction: ${({ mflex }) => mflex ? mflex : 'row'};
  margin-bottom: 1em;
`

export const Subtitle = styled.h3`

`

export const Text = styled.p`

`