import React, { Component } from 'react';
import './Productos.css';
import axios from "axios";

export default class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      juegos: []
    };
  }

  componentDidMount() {
    const juegos_id = window.location.href.split("/")[4]
    axios.get('http://localhost:3103/api/juegos/'+ juegos_id)
      .then((res) => {
        const { juegos } = res.data;
        console.log(juegos)
        this.setState({ juegos })
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  }

  render() {
    const { juegos } = this.state;

    return (
      <div className="container col-12 col-lg-5">
        <header>
          <h1> Gaming-World </h1>
          <nav>
            <ul>
              <li><a href="http://localhost:3000/">Inicio</a></li>
              <li><a href="http://localhost:3000/Carrito">Carrito</a></li>
              <li><a href="http://localhost:3000/iniciodesesion">Iniciar Sesión</a></li>
              <li><a href="http://localhost:3000/Registro">Registrarse</a></li>
            </ul>
          </nav>
        </header>
        <div className="form-group row">
          <div className='productos'>

            {juegos.map((juego) => (
              <div key={juego.id} className="producto-detalles">
                <h2 className='producto-titulo' id="nombre">Nombre del Juego: {juego.nombre}</h2>
                <label>
                  <p className="producto-genero" id="genero_id">Genero: {juego.genero_id}</p>
                </label>
                <label>
                  <p className="producto-desarrolladora" id="desarrolladora_id">Desarrolladora: {juego.desarrolladora_id}</p>
                </label>
                <label>
                  <p className="producto-plataforma" id="plataforma_id">Plataforma: {juego.plataforma_id}</p>
                </label>
                <p id="precio" className='producto-precio'>Precio: {juego.precio}</p>
                <button className="boton-Verproducto" value={"not found"} onClick={"not found"}>Agregar al carro</button>
              </div>
            ))}
          </div>
          <footer>
            <a href="https://www.instagram.com/gaming_world3045/?next=%2F"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\instagram.jpeg" alt="Instagram" /></a>
            <a href="http://faceboock.com%22%3E/"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\faceboock.jpeg" alt="Facebook" /></a>
            <a href="https://twitter.com/GWorld2323"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\twitter.png" alt="Twitter" /></a>
            <p>&copy; 2023 Gaming-World </p>
          </footer>
        </div>
      </div>
    );
  }
}
