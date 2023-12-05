import styled from "styled-components";

export const StyleHeader = styled.header`
  background-color: #0D0D0D;
  height: 10vh;
  display: flex;
  align-items: center;
  justify-content: space-around;
`

export const Figure = styled.header`
  color: white;
  width: 12vw;
  display: flex;
  justify-content: space-evenly;
  // border: solid;
`

export const Nav = styled.nav`
  ul{
    display: flex;  
    justify-content: space-around;
    // border: solid;
    list-style: none;
    width: 60vw;
  }
  
  @media(max-width:800px){
    width: 80vw;
  }

  a{
    text-decoration: none;
    color: #fff;
    font-size: 2rem;
  }
`

