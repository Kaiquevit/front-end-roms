import React from 'react'
import { Link } from 'react-router-dom'
import './Menu.css'
export default function Menu() {
 return (
 <header>
 <nav>
 <ul>
 <li><Link to="/"> Home </Link> </li>
 <li><Link to="/roms"> Roms </Link></li>
 <li><Link to="/favoritos"> Favoritos </Link></li>
 <li><Link to="/sobre"> Sobre </Link></li>
 </ul>
 </nav>
 </header>
 )
}