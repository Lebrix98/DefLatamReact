import React, { useState } from "react";
import { pizzaCart } from "../../data/pizzas";
import { Capitalize } from "../../Helpers/functions";
import "./style.css";

export const Cart2 = () => {
  const [cart, setCart] = useState(pizzaCart);

  const [num1, setNum1] = useState(0);
  const [num2, setNum2] = useState(0);
  const [num3, setNum3] = useState(0);


  const handleAdd = (arr) => {

    console.log(arr)

    if (arr.id === "P001") {
      setNum1(num1 + 1);
    } else if (arr.id === "P002") {
      setNum2(arr.count + 1);
    } else {
      setNum3(arr.count + 1);
    }
  };

  const handleSubstract = (arr) => {};

  return (
    <div className="Container_cart">
      <h1 className="title_cart">Detalles del Pedido:</h1>
      {pizzaCart.map((arr) => {
        return (
          <div className="Content_cart" key={arr.id}>
            <img className="img_pizza" src={arr.img} alt={arr.name} />
            <h4 className="name_pizza">{Capitalize(arr.name)}</h4>
            <h4 className="price_pizza">$ {arr.price.toLocaleString()}</h4>
            <button
              className="btn_pizza substract"
              onClick={() => handleSubstract(arr)}
            >
              -
            </button>
            <h4 className="count_pizza">{arr.count}</h4>
            <button className="btn_pizza add" onClick={() => handleAdd(arr)}>
              +
            </button>
          </div>
        );
      })}
      <h2 className="Total_pizza">Total: ???</h2>
      <button className="btn_Pay">Pagar</button>
    </div>
  );
};

export default Cart2;
