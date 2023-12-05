// import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Sobre from './Components/Sobre';
import Experiencia from './Components/Experiencia';
import Projetos from './Components/Projetos';
import Contato from './Components/Contato';
import Footer from './Components/Footer';
import { GlobalStyle } from './styles/global';

function App() {

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/experiencia" element={<Experiencia />} />
          <Route path="/projetos" element={<Projetos />} />
          {/* <Route path="/contato" element={<Contato />} /> */}
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}

export default App
