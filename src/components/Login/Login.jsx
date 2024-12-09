import React, { useState } from "react";
import './style.css';

export const Login = () => {
  const initEmail = "";
  const initPass = "";

  const initMessage = "";
  const initError = false;

  // Use State
  const [email, setEmail] = useState(initEmail);
  const [pass, setPass] = useState(initPass);

  const [message, setMessage] = useState(initMessage);
  const [error, setError] = useState(initError);

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
    }

    if (pass.length > 6) {
      setMessage("La Contraseña debe tener maximo 6 caracteres.");
      setError(true);
      return;
    }

    setMessage("Usuario Ingresando");
    setError(false);
    resetValues();
  };

  return (
    <>
      <div className="Container_register">
        <h2 className="Title_register">Login</h2>
        <form className="Form_register" onSubmit={validateInput}>
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
          <button className="btn_Submit" type="submit">
            Login
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
