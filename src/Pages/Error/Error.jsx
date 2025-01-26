import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

export const Error = () => {
  return (
    <>
      <div className="Container_error">
        <h2 className="title">Error</h2>
        <h3 className="desc">
          La ruta (URL) a la cual esta accediendo no existe o esta en
          desarrollo.
        </h3>
        <Link className="btn_back" to="/">
          Volver
        </Link>
      </div>
    </>
  );
};

export default Error;
