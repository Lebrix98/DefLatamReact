import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../Context";
import "./style.css";

export const Login = () => {
  const { loginUser } = useContext(UserContext);

  const initEmail = "";
  const initPass = "";

  const initMessage = "";
  const initError = false;

  // Use State
  const [email, setEmail] = useState(initEmail);
  const [password, setPass] = useState(initPass);

  const [message, setMessage] = useState(initMessage);
  const [error, setError] = useState(initError);

  const navigate = useNavigate();

  const resetValues = () => {
    setEmail(initEmail);
    setPass(initPass);
  };

  const validateInput = async (e) => {
    e.preventDefault();

    if (!email.trim() || !password.trim()) {
      setMessage("Todos los campos son Obligatorios.");
      setError(true);
      return;
    } else if (password.length <= 5) {
      setMessage("La Contraseña debe tener maximo 6 caracteres.");
      setError(true);
      return;
    } 

    loginUser(email, password)
    setMessage("Usuario Ingresando");
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
              value={password}
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
