// import './App.css'
import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Inicio from './Components/Inicio';
import Projetos from './Components/Projetos';
import Sobre from './Components/Sobre';
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
          <Route path="/projetos" element={<Projetos />} />
          <Route path="/sobre" element={<Sobre />} />
        </Routes>
      </BrowserRouter>



      <Footer />
    </>
  )
}

export default App
