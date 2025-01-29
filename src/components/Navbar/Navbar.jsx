import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { PizzaContext } from "../../Context/PizzaContext";
import "./style.css";

export const Navbar = ({ icons }) => {
  const { total } = useContext(PizzaContext)
  const token = true;


  const { homeIcon, profileIcon, logoutIcon, logregIcon, totalIcon } = icons;

  return (
    <>
      <div className="Container_Navbar">
        <div className="Content_Navbar">
          <div className="Left_btn">
            <p>Pizzería Mamma Mia!</p>
            <Link to="/" className="Route">
              <img src={homeIcon} />
              Home
            </Link>
            {token ? (
              <>
                <Link className="Route" to="/profile">
                  <img src={profileIcon} />
                  Profile
                </Link>
                <Link className="Route" to="/">
                  <img src={logoutIcon} />
                  Logout
                </Link>
              </>
            ) : (
              <>
                <Link className="Route" to="/login">
                  <img src={logregIcon} />
                  Login
                </Link>
                <Link className="Route" to="/register">
                  <img src={logregIcon} />
                  Register
                </Link>
              </>
            )}
          </div>
          <div className="Right_btn">
            <Link className="Route" to="/cart">
              <img src={totalIcon} /> Total : $ {total.toLocaleString("es-CL")}
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
