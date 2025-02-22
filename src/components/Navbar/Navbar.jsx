import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { PizzaContext, UserContext } from "../../Context";
import "./style.css";

export const Navbar = ({ icons }) => {
  const { total } = useContext(PizzaContext);
  const { btnLogout, token_jwt } = useContext(UserContext);

  const setActiveClass = ({ isActive }) =>
    isActive ? `Route isActive` : "Route";

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
            {token_jwt ? (
              <>
                <NavLink className={setActiveClass} to="/profile">
                  <img src={profileIcon} />
                  Profile
                </NavLink>
                <button className={"Route"} onClick={btnLogout}>
                  <img src={logoutIcon} />
                  Logout
                </button>
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
