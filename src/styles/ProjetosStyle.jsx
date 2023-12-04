import styled from "styled-components";

export const Main = styled.main`
    height: 80vh;
    background-color: #0B2C4D;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Section = styled.section`
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    // flex-direction: column;
    gap: 2.5vw; 
    justify-content: space-evenly;
    height: 65vh;
    width: 35vw;
    margin: 0 auto;
    // border: solid;

    background: white;
    border-radius: 2rem;
    border: rgb(53, 53, 53) 0.1rem solid;
    border-color: rgb(163, 163, 163);
    text-align: center;
`

export const Figure = styled.figure`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    text-align: center;
    // border: solid;
    flex: 1 0 30vw;
    height: 45vh;

    img {
        height: 40vh; 
        width: 30vw; 
        border-radius: 2rem;
        object-fit: cover;
    }
`

export const Botao = styled.div`
    // border: solid;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    // display: block;
    // margin-top: 1rem; 
    height: 8vh;
    width: 100%;

    button {
        font-weight: 600;
        transition: all 300ms ease;
        // padding: 1rem;
        width: 7rem;
        border-radius: 2rem;
        border-color: rgb(163, 163, 163);
        text-align: center;
    }

    button:hover{
        cursor: pointer;
        background: rgb(53, 53, 53);
        color: white;
    }
    
`
