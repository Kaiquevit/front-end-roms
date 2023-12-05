import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Roms from './components/pages/Roms';
import Sobre from './components/pages/Sobre';
import Home from './components/pages/Home';
import DetalhesJogo from './components/DetalhesJogo'; 
import { Favoritos}  from './components/pages/Favoritos';

const root = ReactDOM.createRoot(document.getElementById('root'));

const App = () => (
  <BrowserRouter>
    <Menu />
    <Routes>
      <Route path="/*" element={<Home />} />
      <Route path="/Roms/*" element={<Roms />} />
      <Route path="/sobre/*" element={<Sobre />} />
      <Route path="/detalhe/:id" element={<DetalhesJogo />} />
      <Route path="/favoritos" element={<Favoritos />} />
    </Routes>
  </BrowserRouter>
);

root.render(<App />);
