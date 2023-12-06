

import React from "react";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Header from './componente/header/Header';
import Footer from "./componente/footer/Footer";
import SobrePage from "./pages/sobre/SobrePage"
function Rotas() {
  return (
    <Router>
    <Header />
    <div>
      <Routes>
        <Route path="/webPortifolio/" element={<HomePage />} />
        <Route path="/webPortifolio/sobre" element={<SobrePage />} />
      </Routes>
      </div>
      <Footer/>
  </Router>
  );
}

export default Rotas;
