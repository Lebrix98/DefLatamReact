import React, { useEffect, useState } from 'react'
import './style.css'

export const Pizza = () => {

  const [pizza, setPizza] = useState([])

  const getData = async() => {
    const url = "http://localhost:5000/api/pizzas/p001"
    const res = await fetch(url)
    const data = await res.json()
    setPizza(data)
  }

  useEffect(() => {
    getData()
  }, [])

  console.log(pizza)

  return (
    <div>
      
    </div>
  )
}

export default Pizza
