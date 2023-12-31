import React, { Component } from 'react';
import './Carrito.css';

export default class Carrito extends Component {
    render() {
        return (
            <div className="carrito-container">
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
                <h1 className="carrito-title">Carrito de Compras</h1>

                <div className="juegos-enviados">
                    <div className="juego-en-carrito">
                        <img className="juego-imagen" src="url_del_juego.jpg" alt="Nombre del Juego" />
                        <div className="juego-info">
                            <h3 className="juego-nombre">Nombre del Juego</h3>
                            <p className="juego-precio">$29.99</p>
                        </div>
                    </div>
                </div>

                <div className="resumen-container">
                    <h2 className="resumen-title">Resumen</h2>
                    <p>Total: $XXX.XX</p>
                    <p>Método de Pago: Tarjeta de Crédito</p>
                    <button className="comprar-boton">Comprar</button>
                </div>
                <footer>
                    <a href="https://www.instagram.com/gaming_world3045/"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\carrito\instagram.jpeg" alt="Instagram" /></a>
                    <a href="http://faceboock.com"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\carrito\faceboock.jpeg" alt="Facebook" /></a>
                    <a href="https://twitter.com/GWorld2323"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\carrito\twitter.png" alt="Twitter" /></a>
                    <p>&copy; 2023 Gaming-World </p>
                </footer>
            </div>
        );
    }
}
