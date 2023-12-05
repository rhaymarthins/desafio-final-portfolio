import styled from "styled-components";

export const Main = styled.main`
    height: 80vh;
    background-color: #A6A6A6;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
`

export const Section = styled.section`
    display: flex;
    text-align: initial;
    flex-wrap: wrap;
    justify-content: center;
    align-items: space-between;
    height: 65vh;
    width: 35vw;
    margin: 0 auto;
    background: #F1F4DF;
    border-radius: 3rem;
    border: 0.1rem solid;
    border-color: #0D0D0D;
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
    height: 50vh;

    img {
        height: 40vh; 
        width: 30vw; 
        border-radius: 2rem;
        object-fit: cover;
    }
    h3{
        font-weight: 600;
    }
`

export const Botao = styled.div`
    // border: solid;
    display: flex;
    justify-content: space-evenly;
    text-align: center;
    // display: block;
    // margin-top: 1rem; 
    height: 7vh;
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
        background: #0D0D0D;
        color: white;
    }
    
`
