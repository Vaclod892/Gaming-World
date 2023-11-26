import React, { Component } from 'react';
import './Registro.css'

export default class Registro extends Component {
    render() {
        return (
            <div className='fondoreg'>
                <h1 className='registroh1'> Registrarse </h1>
                <div className="Contenedor2">
                    <div classname="registro">
                        <label> Crear Nombre de Usuario:
                            <input className='inputreg' type="text" placeholder="Nombre de Usuario" />
                        </label>
                        <label> Correo Electronico:
                            <input className='inputreg' type="text" placeholder="Correo Electronico" />
                        </label>
                        <label> Contraseña:
                            <input className='inputreg' type="text" placeholder="Contraseña" />
                        </label>
                        <div>
                        <button className='registro-boton'> Continuar </button>
                        <a href="http://localhost:3000"><span className="registro-boton"> Atras </span></a>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}