import React from "react";
import "./Modal.css";

const Modal = ({ children, isOpen, closeModal }) => {
  const handleModalContainerClick = (e) => e.stopPropagation();
  return (
    <article onClick={closeModal} className={`modal ${isOpen && "is-open"}`}>
      <div className="modal-container" onClick={handleModalContainerClick}>
        <button onClick={closeModal} className="modal-close">
          X
        </button>
        {children}
      </div>
    </article>
  );
};

export default Modal;
