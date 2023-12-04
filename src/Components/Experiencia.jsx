import React from "react";
import { Main, Section, Tecnologias, Figure } from "../styles/ExperienciaStyle";
import LogoHTML from "../assets/html-logo.png";
import LogoCSS from "../assets/css-logo.png";
import LogoJavascript from "../assets/javascript-logo.png";
import LogoReact from "../assets/react-logo.png";
import LogoPython from "../assets/python-logo.png";
import LogoPHP from "../assets/php-logo.png";
import LogoPostgreSQL from "../assets/postgresql-logo.png";

export default function Sobre() {
    const frontend = [
        { nome: "HTML", exp: "Intermediário", image: LogoHTML },
        { nome: "CSS", exp: "Intermediário", image: LogoCSS },
        { nome: "JavaScript", exp: "Intermediário", image: LogoJavascript },
        { nome: "React", exp: "Básico", image: LogoReact }
    ];

    const backend = [
        { nome: "Python", exp: "Intermediário", image: LogoPython },
        { nome: "PHP", exp: "Intermediário", image: LogoPHP },
        { nome: "PostgreSQL", exp: "Básico", image: LogoPostgreSQL }
    ];

    return (
        <>
            <Main>
                <Section>
                    <h2>Skills Frontend</h2>
                    <Tecnologias>
                        {frontend.map(item => (
                            <Figure key={item.nome}>
                                <img src={item.image} alt={item.nome} />
                                <figcaption>
                                    <h3>{item.nome}</h3>
                                    <p>{item.exp}</p>
                                </figcaption>
                            </Figure>
                        ))}
                    </Tecnologias>
                </Section>

                <Section>
                    <h2>Skills Backend</h2>
                    <Tecnologias>
                        {backend.map(item => (
                            <Figure key={item.nome}>
                                <img src={item.image} alt={item.nome} />
                                <figcaption>
                                    <h3>{item.nome}</h3>
                                    <p>{item.exp}</p>
                                </figcaption>
                            </Figure>
                        ))}
                    </Tecnologias>
                </Section>
            </Main>
        </>
    )
}