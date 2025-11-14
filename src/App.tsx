import React from "react";
import './App.css';

import { BrowserRouter, Route, Routes } from "react-router-dom"

import Home from "./pages/home/Home"
import Cadastro from "./pages/cadastro/Cadastro"
import Login from "./pages/login/Login"
import Footer from "./components/footer/Footer"
import Navbar from "./components/navbar/Navbar"

function App() {

  return (
    <> {/*poderia ser uma div também, o importante é estar dentro de uma caixa */}
      <BrowserRouter>
        <Navbar />
        <div className="min-h-[80vh]">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />}/>
              <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
       
        </div>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App