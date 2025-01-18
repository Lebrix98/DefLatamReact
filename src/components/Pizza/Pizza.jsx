import React, { useEffect, useState } from "react";
import { Capitalize } from "../../Helpers/functions";
import "./style.css";

export const Pizza = ({ icons }) => {
  const [pizza, setPizza] = useState([]);
  const { homeIcon } = icons;

  const getData = async () => {
    const url = "http://localhost:5000/api/pizzas/p001";
    const res = await fetch(url);
    const data = await res.json();
    console.log(data);
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  console.log(pizza);

  return (
    <div className="Container_only">
      <img className="img_pizza" src={pizza.img} alt={pizza.name} />
      <div className="properties_pizza">
        <h2 className="name">Pizza {Capitalize(pizza.name || "")}</h2>
        <h4 className="desc">{pizza.desc}</h4>
        <section className="ingredients">
          <h3>Ingredientes</h3>
          <ul>
            {pizza.ingredients?.map((i, index) => {
              return (
                <li key={index}>
                  {" "}
                  <img src={homeIcon} alt="Icon Pizza" /> {i}
                </li>
              );
            })}
          </ul>
        </section>
        <h2 className="price">
          Precio <span>${pizza.price?.toLocaleString("es-CL")}</span>
        </h2>
      </div>
    </div>
  );
};

export default Pizza;
