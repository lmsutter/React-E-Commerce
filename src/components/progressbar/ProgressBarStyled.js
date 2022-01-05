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