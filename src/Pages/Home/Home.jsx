import { CardPizza, Header } from "../../components/index";

export const Home = ({ icons }) => {
  const text = {
    title: "¡Pizzería Mamma Mia!",
    description: "¡Tenemos las mejores pizzas que podrás encontrar!",
  };

  return (
    <>
      <Header text={text} />
      <CardPizza icons={icons} />
    </>
  );
};

export default Home;
