import React, { Component } from 'react';
import './PaginaPrincipal.css'

export default class PaginaPrincipal extends Component {
    render() {
  return (
    <div>
      <header>
        <h1> Gaming-World </h1>
        <nav>
          <ul>
            <li><a href="index.html">Inicio</a></li>
            <li><a href="carrito.html">Carrito</a></li>
            <li><a href="contacto.html">Contacto</a></li>
            <li> <a href="http://google.com"><span onClick={"not found"} className="iniciarS-boton">Iniciar Sesión</span></a></li>
          </ul>
        </nav>
      </header>

      <section className="catalogo">
        <h2>Catálogo de Videojuegos</h2>
        <div className="juego">
          <img src="juego1.jpg" alt="Juego B" />
          <h3>Juego 1</h3>
          <p>Precio: $59.99</p>
          <a href="comprar.html">Comprar</a>
        </div>
        <div className="juego">
          <img src="juego2.jpg" alt="Juego 2" />
          <h3>Juego 2</h3>
          <p>Precio: $49.99</p>
          <a href="comprar.html">Comprar</a>
        </div>
      </section>

      <footer>
        <p>&copy; 2023 Tienda de Videojuegos</p>
      </footer>
    </div>
    )
  }
}