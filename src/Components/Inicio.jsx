import React from "react";
import { Main, Figure, Section, Sociais } from "../styles/InicioStyle";
import LogoLinkedin from "../assets/linkedin-logo.png";
import LogoInstagram from "../assets/instagram-logo.png";
import LogoGithub from "../assets/github-logo.png";
import Perfil from "../assets/perfil.jpg";

export default function Inicio() {
    return (
        <>
            <Main>
                <Section>
                    <p>Olá, me chamo</p>
                    <h1>
                        Ray Martins
                    </h1>
                    <h3>
                        Sou desenvolvedor.
                    </h3>
                    <Sociais>
                        <ul>
                            <li>
                                <a href="https://github.com/rhaymarthins">
                                    <img src={LogoGithub} alt="github" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/ray-martinss/">
                                    <img src={LogoLinkedin} alt="linkedin" />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/raymv_">
                                    <img src={LogoInstagram} alt="instagram" />
                                </a>
                            </li>

                        </ul>
                    </Sociais>
                </Section>

                <Figure>
                    <img src={Perfil} alt="perfil" />
                </Figure>
            </Main>

        </>
    )
}