import React, { Component } from 'react';
import './NewGame.css';
import axios from 'axios';

export default class NewGame extends Component {
    constructor(props) {
      super(props);
      this.state = {
        nombre: '',
        genero_id: '',
        desarrolladora_id: '',
        plataforma_id: '',
        precio: ''
      };
    }
  
    inputChange = (enviar) => {
      const { name, value } = enviar.target;
      this.setState({ [name]: value });
    };
  
    selectChange = (enviar) => {
      const { name, value } = enviar.target;
      this.setState({ [name]: value });
    };
  
    newgameClick = () => {
      const { nombre, genero_id, desarrolladora_id, plataforma_id, precio } = this.state;
      const nuevoJuego = { nombre, genero_id, desarrolladora_id, plataforma_id, precio };
  
      axios.post('http://localhost:3103/api/juegos', nuevoJuego)
        .then((res) => {
          console.log('El juego fue cargado con éxito', res.data);
        })
        .catch((error) => {
          alert(error);
          console.log(error);
        });
    };
  
    render() {
        return (
            <div className="fondoFormulario">
                <h2 className="tituloFormulario">Cargar Juego</h2>
                <form className="contenedorFormulario">
                    <label className="formLabel">
                        Nombre del Juego:
                        <input   
                        className='inputreg'
                        type="text"
                        placeholder="Nombre del juego "
                        name="nombre"
                        value={this.state.nombre}
                        onChange={this.inputChange}
                    />
                    </label>
                    <br />
                    <label className="formLabel">
                        Desarrolladora:
                        <select
                          className='selectreg'
                          name="desarrolladora_id"
                          value={this.state.desarrolladora_id}
                          onChange={this.selectChange}>
                            <option>selecciona una desarrolladora </option>
                            <option value="1">Valve</option>
                            <option value="2">Ubisoft</option>
                            <option value="3">Rockstar Games</option>
                            <option value="4">Nintendo</option>
                            <option value="5">Naughty Dog</option>
                            <option value="6">FromSoftware</option>
                            <option value="7">Electronic Arts</option>
                            <option value="8">Capcom</option>
                            <option value="9">Bethesda</option>
                            <option value="10">Activision</option>
                            <option value="11">microsoft</option>
                            <option value="12">sony</option>
                        </select>
                    </label>

                    <br />
                    <label className="formLabel">
                        Plataforma:
                        <select
                          className='selectreg'
                          name="plataforma_id"
                          value={this.state.plataforma_id}
                          onChange={this.selectChange}>

                                <option>Selcciona una plataforma</option>
                                <option value="1">Pc</option>
                                <option value="2">Ps5</option>
                                <option value="3">Xbox</option>
                                <option value="4">Switch</option>
                            </select>
                    </label>
                    <br />
                    <label className="formLabel">
                        Género:
                        <select
                          className='selectreg'
                          name="genero_id"
                          value={this.state.genero_id}
                          onChange={this.selectChange}>
                                <option>Selcciona un genero</option>
                                <option value="1">Shooter</option>
                                <option value="2">Terror</option>
                                <option value="3">Carreras</option>
                                <option value="4">Deportes</option>
                                <option value="5">Mundo Abierto</option>
                                <option value="6">Simulación</option>
                                <option value="7">Peleas</option>
                            </select>
                    </label>
                    <br />
                    <label className="formLabel">
                        Nombre del Juego:
                        <input   
                        className='inputreg'
                        type="text"
                        placeholder="Precio del Juego "
                        name="precio"
                        value={this.state.precio}
                        onChange={this.inputChange}
                    />
                    </label>

                    <br />
                    <button type="button" className="botonFormulario" onClick={this.newgameClick}>
  Guardar
</button>

                </form>
            </div>
        );
    }
}
