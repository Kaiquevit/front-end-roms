import React, { useEffect, useState } from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import DetalhesJogo from './DetalhesJogo';
import { FaRegStar, FaStar } from "react-icons/fa";
import { getItem,setItem } from '../services/LocalStorageFuncs';
import './Jogo.css'


const Jogo = () => {
  const [roms, setRoms] = useState([]);
  const [start, setStar]= useState( getItem('favoritosJ')||[]);

  useEffect(() => {
    const url = "https://api-roms.vercel.app/";

    fetch(url)
      .then((respFetch) => respFetch.json())
      .then((respJson) => setRoms(respJson))
      .catch((err) => {
        console.error('Erro ao obter dados da API:', err);
      });
  }, []);
  const handleClick = (obj) => {
    const element = start.find((rom) => rom.id === obj.id);
  
    if (element) {
      const arrFilter = start.filter((rom) => rom.id !== obj.id);
      setStar(arrFilter);
      setItem('favoritosJ', arrFilter)
    } else {
      setStar([...start, obj]);
      setItem('favoritosJ', [...start, obj])
    }
  }
  const RomCard = ({ rom }) => (
    <div className="card">
      <Link to={`/detalhe/${rom.id}`}>
        <img src={rom.img} alt={`Imagem ${rom.nome}`} />
        <h2>{rom.nome}</h2>
      </Link>
      <button 
      onClick={()=> handleClick(rom)}
      >
        
        {
          start.some((itemStar)=> itemStar.id === rom.id)?(
           
            <FaStar/>
          ):(
            
            <FaRegStar/>
          )
        }
      </button>
    </div>
  );

  return (
    <div>
      <div className="listacard">
        {roms.map((rom, index) => (
          <RomCard key={index} rom={rom} />
        ))}
      </div>
      <Routes>
        <Route path="/roms/:id/" element={<DetalhesJogo />} />
      </Routes>
    </div>
  );
};

export default Jogo;
