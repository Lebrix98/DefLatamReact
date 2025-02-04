import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext } from "../../Context/PizzaContext";
import "./style.css";

export const Navbar = ({ icons }) => {
  const { total } = useContext(PizzaContext);

  const setActiveClass = ({ isActive }) =>
    isActive ? `Route isActive` : "Route";

  const token = true;

  const { homeIcon, profileIcon, logoutIcon, logregIcon, totalIcon } = icons;

  return (
    <>
      <div className="Container_Navbar">
        <div className="Content_Navbar">
          <div className="Left_btn">
            <p>Pizzería Mamma Mia!</p>
            <NavLink to="/" className={setActiveClass}>
              <img src={homeIcon} />
              Home
            </NavLink>
            {token ? (
              <>
                <NavLink className={setActiveClass} to="/profile">
                  <img src={profileIcon} />
                  Profile
                </NavLink>
                <NavLink className={setActiveClass} to="/logout">
                  <img src={logoutIcon} />
                  Logout
                </NavLink>
              </>
            ) : (
              <>
                <NavLink className={setActiveClass} to="/login">
                  <img src={logregIcon} />
                  Login
                </NavLink>
                <NavLink className={setActiveClass} to="/register">
                  <img src={logregIcon} />
                  Register
                </NavLink>
              </>
            )}
          </div>
          <div className="Right_btn">
            <NavLink className="Route" to="/cart">
              <img src={totalIcon} /> Total : $ {total.toLocaleString("es-CL")}
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
