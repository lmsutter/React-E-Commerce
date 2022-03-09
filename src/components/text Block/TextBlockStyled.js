import styled from 'styled-components'

const mediaBP = '600px';

export const Frame = styled.div`
  background-color: ${({theme}) => theme.grey};
  padding: 1.5em;
  box-sizing: border-box;

  @media (min-width: ${mediaBP}) {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }
`

export const Container = styled.div`
  max-width: 80vw;
  display: flex;
  flex-direction: row;
  overflow-x: scroll;
`

export const Title = styled.h2`
  margin-bottom: .5em;
`

export const Section = styled.div`
  display: flex;
  flex-direction: ${({ mflex }) => mflex ? mflex : 'row'};
  margin: 0 1em 1em 1em;
  ${({overflow}) => overflow ? 'overflow-x: scroll;' : ''}

 &:last-of-type {
  margin-bottom: 0;
 }

 @media (min-width: ${mediaBP}) {
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   margin-right: 1.5em;
 }
`

export const Group = styled.div`
  @media (min-width: ${mediaBP}){
    flex: 1;
    display: flex; 
    flex-direction: row;
    justify-content: space-around;
  }
`

export const Subtitle = styled.h3`
  margin-bottom: .5em;
`

export const Text = styled.p`
   margin-left: 1em;
  &:first-child {
    margin-left: 0;
  } 

  @media (min-width: ${mediaBP}) {
    margin-left: 0;
    margin-bottom: .7em;
  }
`

