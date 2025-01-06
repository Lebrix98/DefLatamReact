import React, { useState } from "react";
import { pizzaCart } from "../../data/pizzas";

export const Cart = () => {
  return (
    <div>
      <h1>Hola Cart</h1>
      {pizzaCart.map(({ id, name, price, count, img }) => {
        const [cart, setCart] = useState(count);

        const handleAdd = () => {
          setCart(cart + 1);
        };

        const handleSubstract = () => {
          if (cart > 1) {
            setCart(cart - 1);
          }
        };

        return (
          <div key={id}>
            <img src={img} alt={name} />
            <h4>{name}</h4>
            <h4>$ {(price*cart).toLocaleString()}</h4>
            <button onClick={() => handleSubstract()}>-</button>
            <h4>{cart}</h4>
            <button onClick={() => handleAdd()}>+</button>
          </div>
        );
      })}

      <h2>Total: ???</h2>
      <button>Pagar</button>
    </div>
  );
};

export default Cart;
