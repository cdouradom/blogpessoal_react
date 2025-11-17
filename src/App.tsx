import React from "react";
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"

function App() {

  return (
    <> {/*poderia ser uma div também, o importante é estar dentro de uma caixa */}
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Login />} /> {/*trocando aqui a pagina, pois so1 temos uma rota por enquanto*/}
              <Route path="/home" element={<Home />} />
              <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
       
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App