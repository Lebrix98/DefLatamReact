import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import { UserContext } from "../../Context/UserContext";

export const Login = () => {
  const { registerUser, setUser } = useContext(UserContext);

  const initEmail = "";
  const initPass = "";

  const initMessage = "";
  const initError = false;

  // Use State
  const [email, setEmail] = useState(initEmail);
  const [pass, setPass] = useState(initPass);

  const [message, setMessage] = useState(initMessage);
  const [error, setError] = useState(initError);

  const navigate = useNavigate();

  const resetValues = () => {
    setEmail(initEmail);
    setPass(initPass);
  };

  const validateInput = (e) => {
    e.preventDefault();

    if (!email.trim() || !pass.trim()) {
      setMessage("Todos los campos son Obligatorios.");
      setError(true);
      return;
    } else if (pass.length > 6) {
      setMessage("La Contraseña debe tener maximo 6 caracteres.");
      setError(true);
      return;
    } else if (registerUser === null) {
      setMessage("Debe registrarse.");
      setError(true);
      return;
    } else if (registerUser.email !== email || registerUser.pass !== pass) {
      setMessage("Los campos no coinciden.");
      setError(true);
      return;
    }

    const loginData = {
      email,
      pass,
    };

    setUser(loginData);
    setMessage("Usuario Ingresando");
    navigate("/profile")
    setError(false);
    resetValues();
  };

  const handleNavigate = () => {
    navigate("/register");
  };

  return (
    <>
      <div className="Container_login">
        <h2 className="Title_login">Login</h2>
        <form className="Form_login" onSubmit={validateInput}>
          <p
            className={`Message ${
              error ? "error" : message.length != 0 ? "success" : null
            }`}
          >
            {error ? message : message.length != 0 ? message : null}
          </p>
          <div className="Form_Option">
            <label>Email</label>
            <input
              type="email"
              name="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Form_Option">
            <label>Contraseña</label>
            <input
              type="password"
              name="Password"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>
          <div className="btns">
            <button className="btn_Submit" type="submit">
              Login
            </button>
            <button
              className="btn_Submit"
              type="submit"
              onClick={handleNavigate}
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
