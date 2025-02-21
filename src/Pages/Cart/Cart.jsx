import React, { useContext, useEffect, useState } from "react";
import { PizzaContext, UserContext } from "../../Context";
import { useNavigate } from "react-router-dom";
import { Capitalize } from "../../Helpers/functions";
import "./style.css";
import Modal from "../../components/Modal/Modal";

export const Cart = () => {
  const { carts, setCarts, total } = useContext(PizzaContext);
  const { user, token_jwt } = useContext(UserContext);
  const [modalOpen, setModalOpen] = useState(false);
  const navigate = useNavigate();

  const handleAdd = (id) => {
    setCarts((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, count: item.count + 1 } : item
      )
    );
  };

  const handleSubstract = (id) => {
    setCarts((prevCart) =>
      prevCart
        .map((item) =>
          item.id === id ? { ...item, count: item.count - 1 } : item
        )
        .filter((item) => item.count > 0)
    );
  };

  const handleLogin = () => {
    navigate("/login");
  };

  const isOpen = () => {
    setModalOpen(true);
  };

  const onClose = () => {
    setModalOpen(false);
    console.log(carts);
    // setCarts([]); //Settear valor del arreglo a vacio
  };

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
    updateCart();
  }, [modalOpen]);

  return (
    <div className="Container_cart">
      <h1 className="title_cart">Detalles del Pedido:</h1>
      {carts.length !== 0 ? (
        carts.map((arr) => {
          return (
            <div className="Content_cart" key={arr.id}>
              <img className="img_pizza" src={arr.img} alt={arr.name} />
              <h4 className="name_pizza">{Capitalize(arr.name)}</h4>
              <h4 className="price_pizza">
                $ {arr.price.toLocaleString("es-CL")}
              </h4>
              <div className="Content_btn">
                <button
                  className="btn_pizza substract"
                  onClick={() => handleSubstract(arr.id)}
                >
                  -
                </button>
                <h4 className="count_pizza">{arr.count}</h4>
                <button
                  className="btn_pizza add"
                  onClick={() => handleAdd(arr.id)}
                >
                  +
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <p className="notPizza">
          {user
            ? "No hay nada en el Carrito :("
            : "Debe registrarse para poder comprar :("}
        </p>
      )}
      <h2 className="Total_pizza">Total: $ {total.toLocaleString("es-CL")}</h2>
      <div className="btn_buy">
        {user ? (
          <button
            className={carts.length !== 0 ? "btn_Pay" : "btn_Pay disable"}
            onClick={() => isOpen()}
          >
            Pagar
          </button>
        ) : (
          <button className="btn_Pay" onClick={handleLogin}>
            Login
          </button>
        )}
      </div>
      <Modal isOpen={modalOpen} onClose={onClose} />
    </div>
  );
};

export default Cart;
