import React, { Component } from 'react';
import './Productos.css'; 

export default class Productos extends Component {
    render() {
        return (
            <div className='productos'>
                <img className='producto-imagen' src="url_de_la_imagen_del_juego.jpg" alt="Nombre del Juego" />
                <div className="producto-detalles">
                    <h2 className='producto-titulo'>Nombre del Juego</h2>
                    <p className='producto-precio'>$49.99</p>
                    <p className='producto-descripcion'>
                        Descripción detallada del juego y sus características.
                    </p>
                    <button className='productos-boton'>Agregar al carro</button>
                    <button className='productos-boton'>Atras</button>
                </div>
            </div>
        );
    }
}
