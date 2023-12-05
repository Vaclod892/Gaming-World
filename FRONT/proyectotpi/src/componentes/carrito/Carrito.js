import React, { Component } from 'react';
import axios from "axios";
import './Carrito.css';
import terre from '../../assets/images/terreneitor.jpg'


class TarjetaCarrito extends React.Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        const { datos, eliminar } = this.props;
        return (
            <div className="shop">
                <div className="box">
                    <img alt="terreneitor" src={terre}/>
                    <div className="content">
                        <h3>{datos.nombre}</h3>
                        <h4>{datos.precio}</h4>
                        <div className="btn-area" onClick={() => eliminar()}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style={{ fill: "rgb(255, 247, 247)" }}><path d="M6 7H5v13a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7H6zm10.618-3L15 2H9L7.382 4H3v2h18V4z"></path></svg>
                            <i aria-hidden="true" className="fa fa-trash"></i>
                            <span className="btn2">Descartar</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default class Carrito extends Component {
    constructor(props){
        super(props);
        this.state = {}
    }

    lista() {
        const { listaCarrito, eliminar } = this.props;
        console.log(this.props)
        return (listaCarrito.map((juego, clave) => (
            <TarjetaCarrito key={clave} datos={juego} eliminar={() => eliminar(clave)} />
        )
        ))
    }

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
                    {this.lista()}
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
