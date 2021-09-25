import styled from 'styled-components'
import {Blobs} from './Svg'


const Wrapper = styled.div`
  position: fixed;
  top: 0;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  
  div {
    width: 80%
  }
`

export default function Background () {

  return (
    <Wrapper>
      <div>
        <Blobs />
      </div>
     
    </Wrapper>
  )
}

