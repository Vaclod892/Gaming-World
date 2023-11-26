import React, { Component } from 'react';
import './PaginaPrincipal.css';

export default class PaginaPrincipal extends Component {
  render() {
    return (
      <div>
        <header>
          <h1> Gaming-World </h1>
          <nav>
            <ul>
              <li><a href="http://localhost:3000/">Inicio</a></li>
              <li><a href="http://localhost:3000/Carrito">Carrito</a></li>
              <li><a href="contacto.html">Contacto</a></li>
              <li><a href="http://localhost:3000/iniciodesesion">Iniciar Sesión</a></li>
              <li><a href="http://localhost:3000/Registro">Registrarse</a></li>
            </ul>
          </nav>
        </header>

        <div className="juego">
          <h2>Nombre del Juego</h2>
          <p>Precio: $49.99</p>
          <img src="url_de_la_imagen.jpg" alt="Nombre del Juego" />
          <a href="http://localhost:3000/Productos"><span className="verproducto-boton"> Ver Producto </span></a>
        </div>
        <footer>
                    <a href="https://www.instagram.com/gaming_world3045/?next=%2F"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\instagram.jpeg" alt="Instagram" /></a>
                    <a href="http://faceboock.com"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\faceboock.jpeg" alt="Facebook" /></a>
                    <a href="http://twitter.com"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\twitter.png" alt="Twitter" /></a>
                    <p>&copy; 2023 Gaming-World </p>
                </footer>
      </div>
    );
  }
}

