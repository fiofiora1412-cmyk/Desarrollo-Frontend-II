
import { useState, useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';

import Inventario from './pages/Inventario';
import Nosotros from './pages/Nosotros';
import PreguntasFrecuentes from './pages/PreguntasFrecuentes';

import './App.css';


function App() {
  const nombreSupermercado = "SuperMarket Inventario";

  
  const productosIniciales = [
    { id: 1, nombre: "Arroz", precio: 1500, stock: 25 },
    { id: 2, nombre: "Leche", precio: 1200, stock: 40 },
    { id: 3, nombre: "Aceite", precio: 2500, stock: 15 },
    { id: 4, nombre: "Pan", precio: 1800, stock: 30 },
    { id: 5, nombre: "Azúcar", precio: 1300, stock: 20 },
    { id: 6, nombre: "Fideos", precio: 990, stock: 35 }
  ];

  const [productos, setProductos] = useState(() => {
    try {
      const guardados = localStorage.getItem("supermarket-productos");

      if (!guardados) {
        return productosIniciales;
      }

      const datos = JSON.parse(guardados);

      return Array.isArray(datos) ? datos : productosIniciales;
    } catch {
      return productosIniciales;
    }
  });


  useEffect(() => {
    localStorage.setItem(
      "supermarket-productos",
      JSON.stringify(productos)
    );
  }, [productos]);




  const cambiarStock = (id, cantidad) => {
    setProductos((productosActuales) =>
      productosActuales.map((producto) =>
        producto.id === id
          ? {
              ...producto,
              stock: Math.max(0, producto.stock + cantidad)
            }
          : producto
      )
    );
  };


  return (
    <div className="app">
      <header>
        <h1>{nombreSupermercado}</h1>
        <p>Sistema de gestión de inventario</p>
      </header>

      <main>
        <Routes>
          <Route
            path="/"
            element={
              <Inventario
                productos={productos}
                onCambiarStock={cambiarStock}
              />
            }
          />

          <Route
            path="/nosotros"
            element={<Nosotros />}
          />

          <Route
            path="/preguntas"
            element={<PreguntasFrecuentes />}
          />
        </Routes>
      </main>

      <footer>
        <p>SuperMarket - Control de inventario</p>
      </footer>

      <nav className="menu-inferior" aria-label="Navegación principal">
        <NavLink to="/" end>
          Inventario
        </NavLink>

        <NavLink to="/nosotros">
          Quiénes somos
        </NavLink>

        <NavLink to="/preguntas">
          Preguntas frecuentes
        </NavLink>
      </nav>
    </div>
  );
}

export default App;
