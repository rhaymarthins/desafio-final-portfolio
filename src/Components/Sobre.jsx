import React from "react";
import { Main, Imagem, Descricao } from "../styles/SobreStyle";
import ImagemSobre from "../assets/about.png";

export default function Sobre() {
    return (
        <>
            <Main>
                <Imagem src={ImagemSobre} alt="facebook" />
                <Descricao>
                    Sou estudante de Engenharia de Computação na Universidade Federal do Ceará. Possuo um breve conhecimento em data science e atualmente estudando tecnologias para desenvolvimento web, tendo recentemente um foco maior com as tecnologias React, Vue.js e Laravel.
                </Descricao>
            </Main>
        </>
    )
}