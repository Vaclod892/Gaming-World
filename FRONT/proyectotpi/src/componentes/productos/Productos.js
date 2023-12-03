import React, { Component } from 'react';
import './Productos.css';
import axios from "axios";

export default class Productos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      juegos: [],
    };
  }

  componentDidMount() {
    axios.get('https://71c.ctpoba.ar/api/juegos')
      .then((res) => {
        const { juegos } = res.data;
        console.log(juegos);
        this.setState({ juegos });
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  }

  render() {
    const { juegos } = this.state;

    return (
      <div className="container col-12 col-lg-5">
        <h1 className="text-center"> Producto </h1>
        <div className="form-group row">
          <div className='productos'>
          
            {juegos.map((juego) => (
              <div key={juego.id} className="producto-detalles">
                <h2 id="nombre">Nombre del Juego: {juego.nombre}</h2>
                <label>
                  <p id="genero_id">Genero: {juego.genero_id}</p>
                </label>
                <label>
                  <p id="desarrolladora_id">Desarrolladora: {juego.desarrolladora_id}</p>
                </label>
                <label>
                  <p id="plataforma_id">Plataforma: {juego.plataforma_id}</p>
                </label>
                <p id="precio" className='producto-precio'>Precio: {juego.precio}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
