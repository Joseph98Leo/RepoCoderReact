import React from 'react'
import '../stylesheets/NavBar.css'

const NavBar = () => {
  return (
    <nav className='navegacion'>
        <h2>LOGO</h2>
        <ul className='navegacion__items'>
            <li><a href='#'>Inicio</a></li>
            <li><a href='#'>Productos</a></li>
            <li><a href='#'>Nosotros</a></li>
            <li><a href='#'>Contáctenos</a></li>
        </ul>
        <h2>Carrito</h2>
    </nav>
  )
}

export default NavBar