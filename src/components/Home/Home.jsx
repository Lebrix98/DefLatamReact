import { CardPizza, Header, Navbar } from "../index.jsx";

import homeIcon from "./../../assets/svg/home.svg";
import profileIcon from "./../../assets/svg/profile.svg";
import logoutIcon from "./../../assets/svg/logout.svg";
import logregIcon from "./../../assets/svg/log_reg.svg";
import totalIcon from "./../../assets/svg/total.svg";
import eyeIcons from "./../../assets/svg/eyes.svg";

import napolitana from "./../../assets/napolitana.jpg";
import española from "./../../assets/espanola.jpg";
import pepperoni from "./../../assets/pepperoni.jpg";

export const Home = () => {
  const text = {
    title: "¡Pizzería Mamma Mia!",
    description: "¡Tenemos las mejores pizzas que podrás encontrar!",
  };

  const icons = {
    homeIcon,
    profileIcon,
    logoutIcon,
    logregIcon,
    totalIcon,
    eyeIcons,
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
      <Navbar icons={icons} />
      <Header text={text} />
      <CardPizza pizza={pizza} icons={icons} />
    </>
  );
};

export default Home;
