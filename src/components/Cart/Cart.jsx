import React, { useState } from "react";
import { pizzaCart } from "../../data/pizzas";
import { Capitalize } from "../../Helpers/functions";
import "./style.css";

export const Cart = () => {
  const [cart, setCart] = useState({});

  const handleAdd = (arr) => {
    setCart((event) => {
      if (event[arr.id]) {
        return {
          ...event,
          [arr.id]: { ...event[arr.id], count: event[arr.id].count + 1 },
        };
      }
      return {
        ...event,
        [arr.id]: { ...arr, count: 1 },
      };
    });
  };

  const handleSubstract = (arr) => {
    setCart((event) => {
      if (event[arr.id] && event[arr.id].count > 1) {
        return {
          ...event,
          [arr.id]: { ...event[arr.id], count: event[arr.id].count - 1 },
        };
      }

      const updateCart = { ...event };
      delete updateCart[arr.id];
      return updateCart;
    });
  };

  const total = Object.values(cart).reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  return (
    <div className="Container_cart">
      <h1 className="title_cart">Detalles del Pedido:</h1>
      {pizzaCart.map((arr) => {
        const pizzaInCart = cart[arr.id] || { count: 0 };

        return (
          <div className="Content_cart" key={arr.id}>
            <img className="img_pizza" src={arr.img} alt={arr.name} />
            <h4 className="name_pizza">{Capitalize(arr.name)}</h4>
            <h4 className="price_pizza">
              $ {(arr.price * pizzaInCart.count).toLocaleString()}
            </h4>
            <button
              className="btn_pizza substract"
              onClick={() => handleSubstract(arr)}
            >
              -
            </button>
            <h4 className="count_pizza">{pizzaInCart.count}</h4>
            <button className="btn_pizza add" onClick={() => handleAdd(arr)}>
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
