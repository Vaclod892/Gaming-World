import React from "react";
import axios from "axios";
import './PaginaPrincipal.css';
import terre from '../../assets/images/terreneitor.jpg'

export default class Tarjetajuegos extends React.Component { 
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {};

        this.Verproducto = event => {
            axios.get('https://71c.ctpoba.ar/api/juegos/' + event.target.value)
              .then(response => {
                // Redirigir a la URL externa
                window.location.href = 'http://localhost:3000/Productos';

              })
              .catch(error => {
                console.error('Error al obtener datos del juego:', error);
              });
        };
    }

    render() {
        const { datos } = this.props;
        console.log({ datos });
        
        return (
            <div className="tarjeta-juegos">
                <div className="card-body col">
                <img src= {terre} />
                    <h3 className="juego-nombre">Nombre: {datos.nombre}</h3>
                    <p className="juego-genero">Genero: {datos.genero_id}</p>
                    <p className="juego-desarrolladora">Desarrolladora: {datos.desarrolladora_id}</p>
                    <p className="juego-plataforma">Plataforma: {datos.plataforma_id}</p>
                    <p className="juego-precio">Precio: {datos.precio}</p>
                    <button className="boton-Verproducto" value={datos.id} onClick={this.Verproducto}>Ver Producto</button>
                </div>
            </div>
        );
    }
}
