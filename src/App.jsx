import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Donations from './pages/Donations';
import Sacraments from './pages/Sacraments';
import Prayers from './pages/Prayers';
import History from './pages/History';
import './App.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contact />} />
        <Route path='/donar' element={<Donations />}/>
        <Route path='/oraciones' element={<Prayers />}/>
        <Route path='/historia' element={<History />}/>
        <Route path='/sacramentos' element={<Sacraments />} />
      </Routes>
    </Router>
  );
}

export default App
