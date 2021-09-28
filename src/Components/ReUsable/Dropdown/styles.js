import styled from 'styled-components'




export const StyledDropDown = styled.li`
  .button {
    height: 100px;
    font-size: 1.3rem;
    display: inline-block;
    margin:0;
    line-height: 100px;
  }
  
  ul {
    display: none;
    list-style: none;
    padding: 0;
  }

  /* a {
    margin: 0;
    height: 100px;
    display: inline-block;
    line-height: 100px;
    background-color: white;
  } */

  &:hover ul {
    display: block;
    position: absolute;
  }
 
`