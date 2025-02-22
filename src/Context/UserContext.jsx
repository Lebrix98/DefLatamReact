import { useState } from "react";
import { createContext } from "react";
import { useNavigate } from "react-router-dom";

export const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const token_jwt = localStorage.getItem("Token");

  const navigate = useNavigate();

  const btnLogout = () => {
    localStorage.removeItem("Token");
    navigate("/");
    setUser(null);
  };

  const registerUser = async (
    email,
    password,
    repassword,
    setMessage,
    setError,
    resetValues
  ) => {
    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, repassword }),
    });

    const data = await res.json();

    if (!email.trim() || !password.trim() || !repassword.trim()) {
      setMessage(data?.error);
      setError(true);
      return;
    } else if (password.length <= 5) {
      setMessage(data?.error);
      setError(true);
      return;
    } else if (password !== repassword) {
      setMessage(data?.error || "Password invalid");
      setError(true);
      return;
    } else if (data?.error) {
      setMessage(data?.error);
      setError(true);
      return;
    }

    if (!data?.error) {
      if (repassword.length === password.length) {
        setMessage("Usuario creado correctamente.");
        setError(false);
        resetValues();
        navigate("/login");
      }
    }
  };

  const loginUser = async (
    email,
    password,
    setMessage,
    setError,
    resetValues
  ) => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (!email.trim() || !password.trim()) {
      setMessage(data?.error);
      setError(true);
      return;
    } else if (password.length <= 5) {
      setMessage(data?.error);
      setError(true);
      return;
    } else if (data?.error) {
      setMessage(data?.error);
      setError(true);
      return;
    }

    if (!data?.error) {
      localStorage.setItem("Token", data.token);
      setMessage("Usuario Ingresando");
      setError(false);
      resetValues();
      setUser(data);
      navigate("/profile");
    }
  };

  const profileUser = async (setProfile) => {
    const res = await fetch("http://localhost:5000/api/auth/me", {
      headers: {
        Authorization: `Bearer ${token_jwt}`,
      },
    });

    const data = await res.json();

    setProfile(data);
  };

  const sharedData = {
    user,
    setUser,
    btnLogout,
    loginUser,
    registerUser,
    profileUser,
    token_jwt,
  };

  return (
    <UserContext.Provider value={sharedData}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
