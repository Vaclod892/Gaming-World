import React, { Component } from 'react';
import './Login.css'

export default class Login extends Component {
    render() {
        return (
            <div className='fondolog'>
                <h1 className='loginh1'>Login</h1>
                <div className="Contenedor2">
                    <div classname="login">
                        <label> Crear Nombre de Usuario:
                            <input className='inputlog' type="text" placeholder="Nombre de Usuario" />
                        </label>
                        <label> Correo Electronico:
                            <input className='inputlog' type="text" placeholder="Correo Electronico" />
                        </label>
                        <label> Contraseña:
                            <input className='inputlog' type="text" placeholder="Contraseña" />
                        </label>
                        <div>
                        <button className='login-boton'> Continuar </button>
                        <button className='login-boton'> Atras </button>
                        </div>
                    </div>

                </div>
            </div>
        )
    }
}