import * as Styled from './TextBlockStyled'


export default function TextBlock ({children}) {
  return (
      <Styled.Frame>
        {children}
      </Styled.Frame>
  )
}

TextBlock.Container = function ({children}){
  return (
    <Styled.Container>
      {children}
    </Styled.Container>
  )
}

TextBlock.Title = function ({children, mobile}) {
  return (
    <Styled.Title mobile={mobile}>
      {children}
    </Styled.Title>
  )
}

TextBlock.Group = function ({ children }) {
  return (
    <Styled.Group>
      {children}
    </Styled.Group>
  )
}

TextBlock.Section = function ({children, mflex, overflow}) {
  return (
    <Styled.Section overflow={overflow} mflex={mflex}>
      {children}
    </Styled.Section>
  )
}

TextBlock.Subtitle = function ({children}) {
  return (
    <Styled.Subtitle>
      {children}
    </Styled.Subtitle>
  )
}


TextBlock.Text = function ({children}) {
  return (
    <Styled.Text>
      {children}
    </Styled.Text>
  )
}