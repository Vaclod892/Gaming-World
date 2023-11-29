import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PaginaPrincipal from './componentes/paginaprincipal/PaginaPrincipal';
import Carrito from './componentes/carrito/Carrito';
import Productos from './componentes/productos/Productos';
import IniciodeSesion from './componentes/iniciodesesion/IniciodeSesion';
import Registro from './componentes/registro/Registro';
import NewGame from './componentes/newgame/NewGame';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Registro" element={<Registro />} />
          <Route path="/Carrito" element={<Carrito />} />
          <Route path="/Productos" element={<Productos />} />
          <Route path="/IniciodeSesion" element={<IniciodeSesion />} />
          <Route path="/Nuevojuego" element={<NewGame />} />
        </Routes>
      </BrowserRouter>
    )
  }
}