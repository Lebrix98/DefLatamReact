import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Capitalize } from "../../Helpers/functions";
import "./style.css";

export const Pizza = ({ icons }) => {
  const [descPizza, setDescPizza] = useState([]);

  const { id } = useParams();

  const { homeIcon } = icons;

  const getData = async () => {
    const url = `http://localhost:5000/api/pizzas/${id}`;
    const res = await fetch(url);
    const data = await res.json();
    setDescPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="Container_only">
      <img className="img_pizza" src={descPizza.img} alt={descPizza.name} />
      <div className="properties_pizza">
        <h2 className="name">Pizza {Capitalize(descPizza.name || "")}</h2>
        <h4 className="desc">{descPizza.desc}</h4>
        <section className="ingredients">
          <h3>Ingredientes</h3>
          <ul>
            {descPizza.ingredients?.map((i, index) => {
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
          Precio <span>${descPizza.price?.toLocaleString("es-CL")}</span>
        </h2>
        <div className="btn_back">
          <Link to="/" className="btn_link">
            {" "}
            Volver{" "}
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Pizza;
