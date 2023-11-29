import React from "react";
import { Main, Figure, Section } from "../styles/InicioStyle";
import LogoFacebook from "../assets/facebook.png";
import LogoInstagram from "../assets/instagram.png";
import LogoLinkedin from "../assets/linkedin.png";

export default function Inicio() {
    return (
        <>
            <Main>
                <Figure>
                    <img src="" alt="avatar" />
                </Figure>

                <Section>
                    <h1>Olá, eu sou___</h1>
                    <nav>
                        <ul>
                            <li><img src={LogoFacebook} alt="facebook" /></li>
                            <li><img src={LogoInstagram} alt="facebook" /></li>
                            <li><img src={LogoLinkedin} alt="facebook" /></li>
                        </ul>
                    </nav>
                </Section>
            </Main>

        </>
    )
}