import { Home, Footer, Navbar } from "./components/index";

import homeIcon from "./assets/svg/home.svg";
import profileIcon from "./assets/svg/profile.svg";
import logoutIcon from "./assets/svg/logout.svg";
import logregIcon from "./assets/svg/log_reg.svg";
import totalIcon from "./assets/svg/total.svg";
import eyeIcons from "./assets/svg/eyes.svg";

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
      <Navbar icons={icons} />
      <Home icons={icons}/>
      <Footer />
    </>
  );
}

export default App;
