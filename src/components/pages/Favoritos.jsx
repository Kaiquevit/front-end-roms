import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { getItem, setItem } from '../../services/LocalStorageFuncs';
import './Favoritos.css';
import { FaStar } from 'react-icons/fa';

export const Favoritos = () => {
  const [data, setData] = useState(getItem('favoritosJ') || []);

  const handleClick = (rom) => {
    console.log('Botão clicado para:', rom);
  };

  const removeItem = (obj) => {
    const arrFilter = data.filter((rom) => rom.id !== obj.id);
    setData(arrFilter);
    setItem('favoritosJ', arrFilter);

    // Corrigindo para usar "console" em vez de "con"
    console.log('Botão clicado para:', obj);
  };

  return (
    <div className="listacard">
      {data.map((rom) => (
        <div className="card" key={rom.id}>
          <Link to={`/detalhe/${rom.id}`}>
            <p />
            <img src={rom.img} alt={`Imagem ${rom.nome}`} />
            <h2>{rom.nome}</h2>
          </Link>
          <button onClick={() => removeItem(rom)}><FaStar /></button>
        </div>
      ))}
    </div>
  );
};
