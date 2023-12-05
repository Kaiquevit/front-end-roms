import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Jogo from './components/Jogo';
import DetalhesJogo from './components/DetalhesJogo'; 

function App() {
  return (
    <BrowserRouter>
   <Routes>
     <Route path="/roms/detalhe" element={<DetalhesJogo />} />

     <Route path="/roms/*" element={<Jogo />} />
   </Routes>
</BrowserRouter>
  );
}

export default App;
