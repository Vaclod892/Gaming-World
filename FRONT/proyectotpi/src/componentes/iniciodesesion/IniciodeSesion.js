import React, { Component } from 'react';
import './IniciodeSesion.css'

export default class IniciodeSesion extends Component {
    render() {
        return (
            <div className='fondoInicio'>
                <h1 className='Inicioh1'> Inicio de Sesion </h1>
                <div className="Contenedor3">
                    <div classname="Inicio_de_sesion">
                        <label>Nombre de Usuario:
                            <input className='inputInicio' type="text" placeholder="Nombre de Usuario" />
                        </label>
                        <label> Contraseña:
                            <input className='inputInicio' type="text" placeholder="Contraseña" />
                        </label>
                        <div>
                        <button className='login-boton'> Crear Cuenta </button>
                        <button className='login-boton'> Cancelar </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}