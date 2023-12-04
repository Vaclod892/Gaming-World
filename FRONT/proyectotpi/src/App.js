import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import axios from 'axios';
import PaginaPrincipal from './componentes/paginaPrincipal/paginaprincipal';
import Carrito from './componentes/carrito/Carrito';
import Productos from './componentes/productos/Productos';
import IniciodeSesion from './componentes/iniciodesesion/IniciodeSesion';
import Registro from './componentes/registro/Registro';
import NewGame from './componentes/newgame/NewGame';

export default class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        juegos: [],
        pou:{
          "nombre": "POU 2",
           "genero_id": "1",
           "desarrolladora_id":"10",
           "plataforma_id":"2",
           "precio": "14.99"
      }
      };
    }

  componentDidMount() {
        axios.post('http://localhost:3103/api/juegos',{ juegos: this.state.pou })
            .then((res) => {
                console.log("el juego fue cargado con exito",res.data);
            })
            .catch((error) => {
                alert(error)
                console.log(error)
            })
    }


//Filtro
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     juegos: [],
  //     selectedJuegoId: null,
  //   };
  // }

 // componentDidMount() {
//     axios.get('http://localhost:3103/api/juegos/3')
//         .then((res) => {
//             const { juegos } = res.data;
//             console.log(juegos)
//             this.setState({ juegos })
//         })
//         .catch((error) => {
//             alert(error)
//             console.log(error)
//         })
// }

//obtencion de titulo:
  //   state = {
//     juegos: []
// }
// componentDidMount() {
//     axios.get('http://localhost:3103/api/juegos')
//         .then((res) => {
//             const { juegos } = res.data;
//             console.log(juegos)
//             this.setState({ juegos })
//         })
//         .catch((error) => {
//             alert(error)
//             console.log(error)
//         })
// }
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