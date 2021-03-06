import styled from 'styled-components'
import {Blobs} from '../components/svg/Svgs'


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
    width: 80%;
  }
  @media (max-width: 600px) {
    transform: scale(2.5) translateY(-5%);

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

