import React, { Component } from 'react';
import './Registro.css';
import axios from 'axios';

export default class Registro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuario: '',
      correo: '',
      contraseña: ''
    };
  }

  InputChange = (enviar) => {
    const { name, value } = enviar.target;
    this.setState({ [name]: value });
  };

  RegistroClick = () => {
    const { usuario, correo, contraseña } = this.state;
    const nuevoUsuario = { usuario, correo, contraseña };

    axios.post('http://localhost:3103/api/usuario', nuevoUsuario)
      .then((res) => {
        console.log('El usuario fue cargado con éxito', res.data);
      })
      .catch((error) => {
        alert(error);
        console.log(error);
      });
  };

  render() {
    return (
      <div className='fondoreg'>
        <h1 className='registroh1'> Registrarse </h1>
        <div className="Contenedor2">
          <div className="registro">
            <label>
              Crear Nombre de Usuario:
              <input
                className='inputreg'
                type="text"
                placeholder="Nombre de Usuario"
                name="usuario"
                value={this.state.usuario}
                onChange={this.InputChange}
              />
            </label>
            <label>
              Correo Electronico:
              <input
                className='inputreg'
                type="text"
                placeholder="Correo Electronico"
                name="correo"
                value={this.state.correo}
                onChange={this.InputChange}
              />
            </label>
            <label>
              Contraseña:
              <input
                className='inputreg'
                type="password"
                placeholder="Contraseña"
                name="contraseña"
                value={this.state.contraseña}
                onChange={this.InputChange}
              />
            </label>
            <div>
              <button className='registro-boton' onClick={this.RegistroClick}>
                Continuar
              </button>
              <a href="http://localhost:3000"><span className="registro-boton"> Atras </span></a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
