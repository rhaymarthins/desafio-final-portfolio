import React from "react";
import { Link } from "react-router-dom";
import { StyleHeader, Figure, Nav } from "../styles/HeaderStyle";
import User from "../assets/user.png";

export default function Header() {
    return (
        <>
            <StyleHeader>
                <Figure>
                    <img src={User} alt="" />
                    <h3>Ray Martins</h3>
                </Figure>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/experiencia">Experiencia</Link>
                        </li>
                        <li>
                            <Link to="/projetos">Projetos</Link>
                        </li>
                        {/* <li>
                            <Link to="/contato">Contato</Link>
                        </li> */}
                    </ul>
                </Nav>
            </StyleHeader>
        </>
    )
}
