import styled from "styled-components";

export const Main = styled.main`
    height: 80vh;
    background-color: #0B2C4D;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Section = styled.section`
    // border: solid;
    width: 40vw;
    height: 30vh;
    align-self: center;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    
    p{
        text-align: center;
    }
    h1{
        font-size: 3rem;
        text-align: center;
    }
    h3{
        font-size: 1.75rem;
        margin-bottom: 1rem;
    }
`

export const Sociais = styled.nav`
    // border: solid;
    display: flex;
    justify-content: center;
    margin-top: 1rem;
    gap: 1rem;
    width: 15vw;
    ul{
        list-style: none;
        display: flex;
        justify-content: space-evenly;
        align-items: center;    
        width: 15vw;    
    }
    li{
        // border: solid;
        display: flex;
        justify-content: space-between;
    }
`

export const Figure = styled.figure`
    // border: solid;
    width: 20vw;
    height: 40vh;
    img {
        width: 22vw;
        height: 45vh;
        border-radius: 50%;
        justify-self: center;
        margin-bottom: var(--mb-1);
        
    }
`

