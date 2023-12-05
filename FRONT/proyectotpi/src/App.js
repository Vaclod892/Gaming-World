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
  //   constructor(props) {
  //         super(props);
  //         this.state = {
  //           juegos: [],
  //           pou:{
  //             "nombre": "POU 3",
  //              "genero_id": "1",
  //              "desarrolladora_id":"10",
  //              "plataforma_id":"2",
  //              "precio": "14.99"
  //         }
  //         };
  //       }



  // componentDidMount() {
  //         axios.put('http://localhost:3103/api/juegos/94',  this.state.pou )
  //             .then((res) => {
  //                 console.log("el juego fue cargado con exito",res.data);
  //             })
  //             .catch((error) => {
  //                 alert(error)
  //                 console.log(error)
  //             })
  //     }

  //mandar juegos
  // constructor(props) {
  //     super(props);
  //     this.state = {
  //       juegos: [],
  //       pou:{
  //         "nombre": "POU 8",
  //          "genero_id": "1",
  //          "desarrolladora_id":"10",
  //          "plataforma_id":"2",
  //          "precio": "14.99"
  //     }
  //     };
  //   }

  //   componentDidMount() {
  //     axios.post('http://localhost:3103/api/juegos', this.state.pou)
  //         .then((res) => {
  //             console.log("El juego fue cargado con éxito", res.data);
  //         })
  //         .catch((error) => {
  //             alert(error);
  //             console.log(error);
  //         });
  // }

  //obtencion de juegos:
  constructor(props) {
    super(props);
    this.state = {
      juegos: [],
      carrito: []
    };
  }
  componentDidMount() {
    axios.get('http://localhost:3103/api/juegos')
      .then((res) => {
        const { juegos } = res.data;
        // console.log(juegos)
        this.setState({ juegos })
        // axios.get('http://localhost:3103/api/juegos/3') //no aporta a la trama (se fue baneado)
        //   .then((res) => {
        //     const { juegos } = res.data;
        //     console.log(juegos)
        //     this.setState({ juegos })
        //   })
        //   .catch((error) => {
        //     alert(error)
        //     console.log(error)
        //   })
      })
      .catch((error) => {
        alert(error)
        console.log(error)
      })
  }


  agregarCarrito(index) {
    let { carrito } = this.state;
    let { juegos } = this.state;
    carrito.push(juegos[index]);
    this.setState({ carrito });
    alert('Juego agregado al carrito');
    console.log(carrito)
  }

  eliminar(index) {
    let { carrito } = this.state;
    carrito.splice(index, 1); // el .splice se usa para eliminar, el index para indicar la posicion en el array y el "1" la cantidad de elemntos a eliminar
    this.setState({ carrito });
  }

  render() {
    return (
      <div className='App'>
      {/* <Header />  aca se llama al componente header cuando se haya creado  */} 
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<PaginaPrincipal
              agregarCarrito={(index) => this.agregarCarrito(index)}
              juegos={this.state.juegos}
            />} />

            <Route path="/Registro" element={<Registro />} />
            <Route path="/Carrito" element={<Carrito 
              listaCarrito = {this.state.carrito} //aca se pasan los productos en el array carrito
              eliminar = {(index) => this.eliminar(index)}
            />} />
            <Route path="/Productos/:juegos_id" element={<Productos {...this.props} />} />
            <Route path="/IniciodeSesion" element={<IniciodeSesion />} />
            <Route path="/Nuevojuego" element={<NewGame />} />
          </Routes>
        </BrowserRouter>
        {/* <Footer />  lo mismo pero con footer xd */}
      </div>
    )
  }
}