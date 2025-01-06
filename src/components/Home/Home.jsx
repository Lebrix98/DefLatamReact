import { pizzas } from "../../data/pizzas.js";
import { CardPizza, Header } from "../index.jsx";


export const Home = ({icons}) => {
  const text = {
    title: "¡Pizzería Mamma Mia!",
    description: "¡Tenemos las mejores pizzas que podrás encontrar!",
  };

  return (
    <>
      <Header text={text} />
      <CardPizza pizza={pizzas} icons={icons} />
    </>
  );
};

export default Home;
