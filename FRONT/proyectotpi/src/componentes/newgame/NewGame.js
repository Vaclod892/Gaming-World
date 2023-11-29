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
                        <select>
                                <option>Valve</option>
                                <option>Ubisoft</option>
                                <option>Rockstar Games</option>
                                <option>Nintendo</option>
                                <option>Naugthty Dog</option>
                                <option>FromSoftware</option>
                                <option>Electronic Arts</option>
                                <option>Capcom</option>
                                <option>Bethesda</option>
                                <option>Activision</option>
                            </select>
                    </label>
                    <br />
                    <label className="formLabel">
                        Plataforma:
                            <select>
                                <option>Pc</option>
                                <option>Ps4</option>
                                <option>Ps5</option>
                                <option>Switch</option>
                                <option>Xbox</option>
                            </select>
                    </label>
                    <br />
                    <label className="formLabel">
                        Género:
                            <select>
                                <option>Shooter</option>
                                <option>Terror</option>
                                <option>Carreras</option>
                                <option>Deportes</option>
                                <option>Mundo Abierto</option>
                                <option>Simulación</option>
                                <option>Peleas</option>
                            </select>
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
