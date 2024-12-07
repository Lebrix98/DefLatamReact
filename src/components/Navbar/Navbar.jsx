import React from "react";
import "./style.css";

export const Navbar = ({ icons }) => {
  const total = 25000;
  const token = false;

  const { homeIcon, profileIcon, logoutIcon, logregIcon, totalIcon } = icons;

  return (
    <>
      <div className="Container_Navbar">
        <div className="Content_Navbar">
          <div className="Left_btn">
            <p>Pizzería Mamma Mia!</p>
            <button>
              <img src={homeIcon} />
              Home
            </button>
            {token ? (
              <>
                <button>
                  <img src={profileIcon} />
                  Profile
                </button>
                <button>
                  <img src={logoutIcon} />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button>
                  <img src={logregIcon} />
                  Login
                </button>
                <button>
                  <img src={logregIcon} />
                  Register
                </button>
              </>
            )}
          </div>
          <div className="Right_btn">
            <button>
              <img src={totalIcon} /> Total : $ {total.toLocaleString()}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
