import { CardPizza, Header, Navbar } from "../index.jsx";



import napolitana from "./../../assets/napolitana.jpg";
import española from "./../../assets/espanola.jpg";
import pepperoni from "./../../assets/pepperoni.jpg";

export const Home = ({icons}) => {
  const text = {
    title: "¡Pizzería Mamma Mia!",
    description: "¡Tenemos las mejores pizzas que podrás encontrar!",
  };



  const pizza = [
    {
      id: 1,
      name: "Napolitana",
      price: 5950,
      ingedients: ["Mozzarella, ", "Tomates, ", "Jamón, ", "Orégano"],
      img: napolitana,
    },
    {
      id: 2,
      name: "Española",
      price: 6950,
      ingedients: ["Mozzarella, ", "Gorgonzola, ", "Parmesano, ", "Provolone "],
      img: española,
    },
    {
      id: 3,
      name: "Pepperoni",
      price: 6950,
      ingedients: ["Mozzarella, ", "Pepperoni, ", "Orégano "],
      img: pepperoni,
    },
  ];

  return (
    <>
      <Header text={text} />
      <CardPizza pizza={pizza} icons={icons} />
    </>
  );
};

export default Home;
