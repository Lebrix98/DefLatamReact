import React, { useState } from "react";
import { pizzaCart } from "../../../data/pizzas";
import { Capitalize } from "../../../Helpers/functions";
import "./style.css";

export const Cart = () => {
  const [cart, setCart] = useState(pizzaCart);

  const handleAdd = (id) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleSubstract = (id) => {
    setCart((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const total = cart.reduce((acc, pizza) => acc + pizza.price * pizza.count, 0);

  return (
    <div className="Container_cart">
      <h1 className="title_cart">Detalles del Pedido:</h1>
      {cart.map((arr) => {
        return (
          <div className="Content_cart" key={arr.id}>
            <img className="img_pizza" src={arr.img} alt={arr.name} />
            <h4 className="name_pizza">{Capitalize(arr.name)}</h4>
            <h4 className="price_pizza">
              $ {arr.price.toLocaleString("es-CL")}
            </h4>
            <button
              className="btn_pizza substract"
              onClick={() => handleSubstract(arr.id)}
            >
              -
            </button>
            <h4 className="count_pizza">{arr.count}</h4>
            <button className="btn_pizza add" onClick={() => handleAdd(arr.id)}>
              +
            </button>
          </div>
        );
      })}
      <h2 className="Total_pizza">Total: $ {total.toLocaleString()}</h2>
      <button className="btn_Pay">Pagar</button>
    </div>
  );
};

export default Cart;
