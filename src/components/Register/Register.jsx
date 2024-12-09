import React, { useState } from "react";
import "./style.css";

export const Register = () => {
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

    if (!email.trim() || !pass.trim() || !passCofirm.trim()) {
      setMessage("Todos los campos son Obligatorios.");
      setError(true);
      return;
    }

    if (pass.length > 6) {
      setMessage("La Contraseña debe tener maximo 6 caracteres.");
      setError(true);
      return;
    }

    if (pass !== passCofirm) {
      setMessage("Las Contraseñas ingresadas son distintas.");
      setError(true);
      return;
    }

    setMessage("Usuario creado correctamente.");
    setError(false);
    resetValues();
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

//   const dataForm = [
//     {
//       id: 1,
//       label: "Email",
//       type: "email",
//       name: "email",
//       value: email,
//       setter: (e) => setEmail(e.target.value),
//     },
//     {
//       id: 2,
//       label: "Contraseña",
//       type: "password",
//       name: "password",
//       value: pass,
//       setter: (e) => setPass(e.target.value),
//     },
//   ];

/* {dataForm.map(({ id, label, name, type, value, setter }) => {
    <div id={id}>
        <label>{label}</label>
        <input
            type={type}
            name={name}
            onChange={setter}
            value={value}
        />
    </div>;
})}*/
