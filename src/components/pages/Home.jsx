// Home.js
import React from 'react';
import Jogo from '../Jogo';
import './Home.css';

export default function Home() {
  return (
    <div className="container">
      <div className="header">
        <h1 className="text-center">Bora Relaxar!</h1>
        <img
          src="https://e1.pxfuel.com/desktop-wallpaper/744/967/desktop-wallpaper-aesthetic-anime-neon-youtube-banner-anime.jpg"
          alt="Evangelion"
          style={{ width: '103%', height: 'auto' }}
        />
      </div>
      <div className="content">
        <h1>Lista de Roms</h1>
        <Jogo />
      </div>
    </div>
  );
}
