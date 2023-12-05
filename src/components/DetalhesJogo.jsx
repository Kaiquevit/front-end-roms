import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import "./DetalheJogo.css"

const DetalhesJogo = () => {
  const { id } = useParams();
  const [rom, setRom] = useState([]);

  useEffect(() => {
    const url = `http://localhost:9081/roms/${id}`;

    fetch(url)
      .then((respFetch) => respFetch.json())
      .then((respJson) => setRom(respJson))
      .catch((err) => {
        console.error('Erro ao obter detalhes do jogo:', err);
      });
  }, [id]);

  const RomGame = ({ rom }) => (
    <div className="card">
      <p/>
      <p/>
      <h1> {rom.nome}</h1>
      <img src={rom.img} alt={`Imagem ${rom.nome}`} />
      <p/>
      <a
        href={`https://drive.google.com/drive/u/0/folders/1CXrgDj_PcfwPIojr5q4RoTR_seuM7r-P`}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className='Dowlond'>Download</button>
      </a>
      <p> {rom.descricao}</p>
      <p>{rom.peso}MB</p>
      
    </div>
  );

  return (
    <div className="listacard">
      {rom.map((rom, index) => (
  <RomGame key={index} rom={rom} />
))}
    </div>
  );
};

export default DetalhesJogo;
