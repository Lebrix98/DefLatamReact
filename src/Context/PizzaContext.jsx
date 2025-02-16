import React, { createContext, useEffect, useState } from "react";

export const PizzaContext = createContext();

const PizzaProvider = ({ children }) => {
  const [pizza, setPizza] = useState([]);
  const [carts, setCarts] = useState([]);
  const token_jwt = localStorage.getItem("Token");

  const getData = async () => {
    const url = "http://localhost:5000/api/pizzas";
    const res = await fetch(url);
    const data = await res.json();
    setPizza(data);
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    async function updateCart() {
      const urlCart = "http://localhost:5000/api/checkouts";
      await fetch(urlCart, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token_jwt}`,
        },
        body: JSON.stringify({
          cart: carts,
        }),
      });
    }
    console.log(carts)
    updateCart()
  }, [carts]);

  const total = carts.reduce(
    (acc, pizza) => acc + pizza.price * pizza.count,
    0
  );

  const sharedPizza = { pizza, setPizza, carts, setCarts, total };

  return (
    <PizzaContext.Provider value={sharedPizza}>
      {children}
    </PizzaContext.Provider>
  );
};

export default PizzaProvider;
