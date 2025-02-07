import { useContext } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { UserContext } from "./Context";
import PizzaProvider from "./Context/PizzaContext";

import { Home, Register, Login, Cart, Profile, Error } from "./Pages/index";
import { Footer, Navbar, Pizza } from "./components";

import {
  eyeIcons,
  homeIcon,
  logoutIcon,
  logregIcon,
  profileIcon,
  totalIcon,
} from "./assets/svg";
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

  const { user } = useContext(UserContext);

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
              <Route
                path="/profile"
                element={user ? <Profile /> : <Navigate to="/" />}
              />
              <Route path="/register" element={<Register />} />
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Login />}
              />
              <Route path="/cart" element={<Cart />} />
              <Route path="/pizza/:id" element={<Pizza icons={icons} />} />
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
