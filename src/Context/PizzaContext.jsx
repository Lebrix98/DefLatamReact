import React, { createContext, useEffect, useState } from 'react'

export const PizzaContext = createContext()

const PizzaProvider = ({children}) => {

    const [pizza, setPizza] = useState([])
    const [carts, setCarts] = useState([])

    const getData = async() => {
      const url = "http://localhost:5000/api/pizzas"
      const res = await fetch(url)
      const data = await res.json()
      setPizza(data)
    }
  
    useEffect(() => {
      getData()
    }, [])
    
    const total = carts.reduce(
      (acc, pizza) => acc + pizza.price * pizza.count,
      0
    );

    const sharedPizza = {pizza, setPizza, carts, setCarts, total}

    return (
        <PizzaContext.Provider value={sharedPizza}>
            {children}
        </PizzaContext.Provider>
    )
}

export default PizzaProvider;
