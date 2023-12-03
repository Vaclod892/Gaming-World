import React from "react";
import axios from "axios";
import './PaginaPrincipal.css';
import Tarjetajuegos from "./tarjetajuegos.js";

export default class Listajuegos extends React.Component {
    state = {
        juegos: []
    }

    //GET
    componentDidMount() {
        axios.get('https://71c.ctpoba.ar/api/juegos')
            .then((res) => {
                const { juegos } = res.data;
                console.log(juegos)
                this.setState({ juegos })
            })
            .catch((error) => {
                alert(error)
                console.log(error)
            })
    }
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
                <h1>Lista de juegos:</h1>

                <div id="lista_juegos">
                {this.state.juegos.map((juego, clave) => {
                    return (
                   <Tarjetajuegos key={clave} datos={juego} />
                    )
                })}
                </div>
                 <footer>
                    <a href="https://www.instagram.com/gaming_world3045/?next=%2F"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\instagram.jpeg" alt="Instagram" /></a>
                    <a href="http://faceboock.com%22%3E/"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\faceboock.jpeg" alt="Facebook" /></a>
                    <a href="https://twitter.com/GWorld2323"><img src="C:\proyecto\FRONT\proyectotpi\src\componentes\paginaprincipal\twitter.png" alt="Twitter" /></a>
                    <p>&copy; 2023 Gaming-World </p>
                </footer>
            </div>
        )
    }
}