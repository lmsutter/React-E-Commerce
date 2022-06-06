import styled, { keyframes } from 'styled-components'

const grow = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
  
`

export const Container = styled.div`
  position: relative;
  display: inline-block;
  margin: 0 auto;
`

export const BarContainer = styled.div`
  background-color: ${({ theme }) => theme.grey};
  width: 300px;
  height: 40px;
  margin: 1.5em auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7px;
  border-radius: 150px;
  position: relative;
  overflow: hidden;
  

  .animation {
    animation: ${grow} 10s linear 1;
  }
`

export const Bar = styled.div`
  background-color: ${({theme}) => theme.color1};
  width: 100%;
  height: 100%;
  border-radius: 50px;
`

export const Cover = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background-color: ${({ theme}) => theme.grey};

`

export const Pause = styled.button`
  border: none;
  position: absolute;
  font-size: 1.7em;
  transform: translateX(-50%) translateY(-50%) scale(.7);
  left: 50%;
  top: 50%;
  z-index: 1;
  background-color: rgba(255, 255, 255, .8);
  aspect-ratio: 1/1;
  height: 70px;
  width: 70px;
  border-radius: 50%;
  transition: transform .2s ease-in;
  opacity: 0;
  
  ${Container}:hover & {
    transform: translateX(-50%) translateY(-50%) scale(1);
    opacity: 1;
  }
  ${({paused}) => paused && (
      `transform: translateX(-50%) translateY(-50%) scale(1);
      opacity: 1;`
  )}
`