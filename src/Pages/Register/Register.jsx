import React, { useContext, useState } from "react";
import { UserContext } from "../../Context";
import "./style.css";

export const Register = () => {
  const { registerUser, errorReg } = useContext(UserContext);

  // Initial Value
  const initEmail = "";
  const initPass = "";
  const initPassConfirm = "";

  const initMessage = "";
  const initError = false;

  // Use State
  const [email, setEmail] = useState(initEmail);
  const [pass, setPass] = useState(initPass);
  const [passCofirm, setPassConfirm] = useState(initPassConfirm);

  const [message, setMessage] = useState(initMessage);
  const [error, setError] = useState(initError);

  const resetValues = () => {
    setEmail(initEmail);
    setPass(initPass);
    setPassConfirm(initPassConfirm);
  };

  const validateInput = (e) => {
    e.preventDefault();

    registerUser(email, pass, passCofirm, setMessage, setError, resetValues);
  };

  return (
    <>
      <div className="Container_register">
        <h2 className="Title_register">Registar</h2>
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
          <div className="Form_Option">
            <label>Confirmar Contraseña</label>
            <input
              type="password"
              name="Confirm"
              value={passCofirm}
              onChange={(e) => setPassConfirm(e.target.value)}
            />
          </div>
          <button className="btn_Submit" type="submit">
            Enviar
          </button>
        </form>
      </div>
    </>
  );
};

export default Register;
