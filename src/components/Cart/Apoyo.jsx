import { useState } from "react";
import { productos } from "./productos";
import "./App.css";

export default function Apoyo() {
  const [carrito, setCarrito] = useState([]); // Carrito inicial vacío

  function agregar(evento, producto) {
    setCarrito([...carrito, producto]);
  }

  return (
    <main>
      <h1>Hola</h1>
      <ul>
        {productos.map((producto) => (
          <li key={producto.id}>
            <h3>{producto.nombre}</h3>
            <p>
              Precio: <b>${producto.precio.toFixed(2)}</b>
            </p>
            <button onClick={(e) => agregar(e, producto)}>
              Agregar al carrito
            </button>
          </li>
        ))}
      </ul>
      <section>
        <h2>Carrito</h2>
        <ul>
          {carrito.map((seleccionado) => (
            <li key={seleccionado.id}>
              <h3>{seleccionado.nombre}</h3>
              <p>(${seleccionado.precio})</p>
            </li>
          ))}
        </ul>
        <b>
          Total: $
          {carrito.reduce(
            (accumulator, currentValue) => accumulator + currentValue.precio,
            0
          )}
        </b>
      </section>
    </main>
  );
}
