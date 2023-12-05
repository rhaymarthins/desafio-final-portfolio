import React from "react";
import { Main, Section, Figure, Botao } from "../styles/ProjetosStyle";
import PortContador from "../assets/port-contador.png";
import PortCalculadora from "../assets/port-calculadora.png";

export default function Projetos() {
    const projetos = [
        { nome: "Contador", link: "https://replit.com/@RayMartins/desafio02", github: "https://github.com/rhaymarthins/contador", image: PortContador },
        { nome: "Calculadora", link: "https://calculadora-figwnkufx-ray-martins-projects.vercel.app/", github: "https://github.com/rhaymarthins/calculadora", image: PortCalculadora },
        // { nome: "Halloween", link: "", image: "" },
        // { nome: "Outubro Rosa", link: "", image: "" },
    ];
    return (
        <>
            <Main>
                {projetos.map(item => (
                    <Section key={item.nome}>
                        <Figure>
                            <img src={item.image} alt={item.nome} />
                            <figcaption>
                                <h3>{item.nome}</h3>
                            </figcaption>
                        </Figure>

                        <Botao>
                            <button onClick={() => window.open(item.github, "_blank")}>Github</button>
                            <button onClick={() => window.open(item.link, "_blank")}>Projeto</button>
                        </Botao>

                    </Section>
                ))}
            </Main>
        </>
    )
}