import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import PaginaPrincipal from './componentes/paginaprincipal/PaginaPrincipal';
import Login from './componentes/login/Login';

export default class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPrincipal />} />
          <Route path="/Login" element={<Login />} />
        </Routes>
      </BrowserRouter>
    )
  }
}