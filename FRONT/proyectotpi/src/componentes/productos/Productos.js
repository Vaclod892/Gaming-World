import React, { Component } from 'react';
import './Productos.css';

export default class Productos extends Component {
    render() {
        return (
            <div>
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
                <div className='productos'>
                    <img className='producto-imagen' src="url_de_la_imagen_del_juego.jpg" alt="Nombre del Juego" />
                    <div className="producto-detalles">
                        <h2 className='producto-titulo'>Nombre del Juego</h2>
                        <p className='producto-precio'>$49.99</p>
                        <label>
                            <p>Plataforma:</p>
                            <select>
                                <option>Pc</option>
                                <option>Ps4</option>
                                <option>Ps5</option>
                                <option>Switch</option>
                                <option>Xbox</option>
                            </select>
                        </label>
                        <p className='producto-descripcion'>
                            Descripción detallada del juego y sus características.
                        </p>
                        <button className='productos-boton'>Agregar al carro</button>
                        <a href="http://localhost:3000"><span className="productos-boton"> Atras </span></a>
                    </div>
                </div>
                <footer>
                    <a href="https://www.instagram.com/gaming_world3045/"><img src="url_de_la_imagen_de_twitter.png" alt="Instagram" /></a>
                    <a href="http://faceboock.com"><img src="url_de_la_imagen_de_twitter.png" alt="Facebook" /></a>
                    <a href="http://twitter.com"><img src="url_de_la_imagen_de_twitter.png" alt="Twitter" /></a>
                    <p>&copy; 2023 Gaming-World </p>
                </footer>
            </div>
        );
    }
}
