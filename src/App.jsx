import { Route, Routes } from "react-router-dom";

import { Home, Register, Login, Cart, Profile, Error } from "./Pages/index";
import { Footer, Navbar, Pizza } from "./components";

import homeIcon from "./assets/svg/home.svg";
import profileIcon from "./assets/svg/profile.svg";
import logoutIcon from "./assets/svg/logout.svg";
import logregIcon from "./assets/svg/log_reg.svg";
import totalIcon from "./assets/svg/total.svg";
import eyeIcons from "./assets/svg/eyes.svg";

import PizzaProvider from "./Context/PizzaContext";

import "./style.css";

function App() {
  const icons = {
    homeIcon,
    profileIcon,
    logoutIcon,
    logregIcon,
    totalIcon,
    eyeIcons,
  };

  return (
    <>
      <div className="grid-container">
        <PizzaProvider>
          <header id="header">
            <Navbar icons={icons} />
          </header>
          <main id="main">
            <Routes>
              <Route path="/" element={<Home icons={icons} />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza icons={icons} />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/*" element={<Error />} />
            </Routes>
          </main>
          <footer id="footer">
            <Footer />
          </footer>
        </PizzaProvider>
      </div>
    </>
  );
}

export default App;
