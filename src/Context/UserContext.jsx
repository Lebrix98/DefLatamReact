import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const navigate = useNavigate();

  const btnLogout = () => {
    localStorage.removeItem("Token");
    setUser(null);
  };

  const registerUser = async (email, password, repassword) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, repassword }),
    });

    console.log(res)

    const data = await res.json();
    console.log(data);

    if (!data?.error) {
      navigate("/login");
    }
  };

  const loginUser = async (email, password) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!data?.error) {
      localStorage.setItem("Token", data.token);
      setUser(data);
      navigate("/profile");
    }
  };

  const sharedData = {
    user,
    setUser,
    btnLogout,
    loginUser,
    registerUser,
  };

  return (
    <UserContext.Provider value={sharedData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
