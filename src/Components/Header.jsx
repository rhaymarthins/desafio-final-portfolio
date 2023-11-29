import React from "react";
import { Link } from "react-router-dom";
import { StyleHeader, Nav } from "../styles/HeaderStyle";

export default function Header() {
    return (
        <>
            <StyleHeader>
                <Nav>
                    <ul>
                        <li>
                            <Link to="/">Início</Link>
                        </li>
                        <li>
                            <Link to="/sobre">Sobre</Link>
                        </li>
                        <li>
                            <Link to="/projetos">Projetos</Link>
                        </li>
                    </ul>
                </Nav>
            </StyleHeader>
        </>
    )
}
