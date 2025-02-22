import React from "react";
import "./style.css";

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="Overlay">
      <div className="Modal">
        <h2>¡Pago Exitoso!</h2>
        <p>Su orden ya se esta procesando.</p>
        <p>Muchas gracias por preferirnos.</p>
        <button onClick={onClose} className="CloseButton">
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
