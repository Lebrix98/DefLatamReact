// import { pizzas } from "../../data/pizzas.js";
import { useEffect, useState } from "react";
import { CardPizza, Header } from "../../index.jsx";


export const Home = ({icons}) => {
  const text = {
    title: "¡Pizzería Mamma Mia!",
    description: "¡Tenemos las mejores pizzas que podrás encontrar!",
  };

  const [pizza, setPizza] = useState([])

  const getData = async() => {
    const url = "http://localhost:5000/api/pizzas"
    const res = await fetch(url)
    const data = await res.json()
    setPizza(data)
  }

  useEffect(() => {
    getData()
  }, [])
  

  return (
    <>
      <Header text={text} />
      <CardPizza pizza={pizza} icons={icons} />
    </>
  );
};

export default Home;
