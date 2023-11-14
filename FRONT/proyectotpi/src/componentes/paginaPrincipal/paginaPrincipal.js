import React, { Component } from 'react';
import './PaginaPrincipal.css';
import juegos from '../backendtrucho/datos'; 

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
              <li><a href="http://google.com"><span onClick={"not found"} className="iniciarS-boton">Iniciar Sesión</span></a></li>
            </ul>
          </nav>
        </header>

        <section className="catalogo">
          <h2>Catálogo de Videojuegos</h2>
          {juegos.map((juego) => (
            <div key={juego.id} className="juego">
              <img src={juego.imagen} alt={juego.nombre} />
              <h3>{juego.nombre}</h3>
              <p>Precio: ${juego.precio}</p>
              <a href="comprar.html">Ver Producto</a>
            </div>
          ))}
        </section>

        <footer>
          <p>&copy; 2023 Gaming-World </p>
        </footer>
      </div>
    );
  }
}
