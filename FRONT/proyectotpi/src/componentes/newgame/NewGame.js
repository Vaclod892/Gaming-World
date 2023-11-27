import React, { Component } from 'react';
import './NewGame.css';

export default class NewGame extends Component {
    render() {
        return (
            <div className="fondoFormulario">
                <h2 className="tituloFormulario">Cargar Juego</h2>
                <form className="contenedorFormulario">
                    <label className="formLabel">
                        Nombre del Juego:
                        <input type="text" className="inputFormulario" />
                    </label>
                    <br />
                    <label className="formLabel">
                        Desarrolladora:
                        <input type="text" className="inputFormulario" />
                    </label>
                    <br />
                    <label className="formLabel">
                        Plataforma:
                        <input type="text" className="inputFormulario" />
                    </label>
                    <br />
                    <label className="formLabel">
                        Género:
                        <input type="text" className="inputFormulario" />
                    </label>
                    <br />
                    <label className="formLabel">
                        Imagen de Portada:
                        <input type="file" className="inputFormulario" />
                    </label>
                    <br />
                    <button type="submit" className="botonFormulario">Guardar</button>
                </form>
            </div>
        );
    }
}
