import { useRef } from 'react'
import * as Styled from './ProgressBarStyled'

export default function ProgressBar ({ remaining, onClick, paused }) {
  const cover = useRef(null)
  if(paused && cover.current) {
    cover.current.style.animationPlayState = 'paused'
  } else if (cover.current) {
    cover.current.style.animationPlayState = 'running'
  }

  return (
    <Styled.Container>
      <Styled.BarContainer>
        <Styled.Cover ref={cover} className={remaining > 0 ? 'animation' : ''}/>
        <Styled.Bar  />
      </Styled.BarContainer>
      <Styled.Pause paused={paused} onClick={onClick}>| |</Styled.Pause>
    </Styled.Container>
  )
}