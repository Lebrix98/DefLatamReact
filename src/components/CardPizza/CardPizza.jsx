import React, { useContext } from "react";
import { PizzaContext } from "../../Context/PizzaContext";
import { Link } from "react-router-dom";
import "./style.css";

export const CardPizza = ({ icons }) => {
  const { pizza, carts, setCarts } = useContext(PizzaContext);
  const { homeIcon, eyeIcons, totalIcon } = icons;

  const handleSelected = (id) => {
    let selectedPizza = pizza.find((item) => item.id === id);

    let existingPizza = carts.find((item) => item.id === id);

    if (existingPizza) {
      setCarts((prevCarts) =>
        prevCarts.map((item) =>
          item.id === id ? { ...item, count: item.count + 1 } : item
        )
      );
    } else {
      let cartPizza = {
        id: selectedPizza.id,
        name: selectedPizza.name,
        price: selectedPizza.price,
        count: 1,
        img: selectedPizza.img,
      };
      setCarts((prevCarts) => [...prevCarts, cartPizza]);
    }
  };

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
              <ul>
                {ingredients.map((p, index) => {
                  return <li key={index}>{p},</li>;
                })}
              </ul>
            </h4>
          </div>
          <h4 className="price_pizza">
            Precio : $ {price.toLocaleString("es-CL")}
          </h4>
          <div className="buttons_pizza">
            <Link className="btn" to={`/pizza/${id}`}>
              Ver Más <img src={eyeIcons} alt="" />
            </Link>
            <button className="btn" onClick={() => handleSelected(id)}>
              Añadir <img src={totalIcon} alt="" />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardPizza;
