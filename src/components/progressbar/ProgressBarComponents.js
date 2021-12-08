import * as Styled from './ProgressBarStyled'

export default function ProgressBar ({ remaining }) {

  return (
    <Styled.Container>
      <Styled.Cover className={remaining > 0 ? 'animation' : ''}/>
      <Styled.Bar  />
    </Styled.Container>
  )
}