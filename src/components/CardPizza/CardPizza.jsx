import React from "react";
import "./style.css";

export const CardPizza = ({ pizza, icons }) => {
  const { homeIcon, eyeIcons, totalIcon } = icons;

  return (
    <div className="Container_pizza">
      {pizza.map(({ id, name, desc, price, ingredients, img }) => (
        <div key={id} className="Card_pizza">
          <img className="img_pizza" src={img} alt={name} />
          <h3 className="title_pizza">Pizza {name}</h3>
          <div className="ingedients_pizza">
            <h3>Ingedientes :</h3>
            <h4>
              <img src={homeIcon} alt={homeIcon} />
              {ingredients.map((p, index) => {
                return <li key={index}>{p}</li>;
              })}
            </h4>
          </div>
          <h4 className="price_pizza">
            Precio : $ {price.toLocaleString("es-CL")}
          </h4>
          <div className="buttons_pizza">
            <button>
              Ver Más <img src={eyeIcons} alt="" />
            </button>
            <button>
              Añadir <img src={totalIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPizza;
