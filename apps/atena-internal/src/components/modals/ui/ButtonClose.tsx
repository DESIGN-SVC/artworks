import React from "react";

import './ButtonClose.css';

interface ButtonCloseProps {
  modalId: string;
}

export function ButtonClose({modalId}: ButtonCloseProps) {

  function handleStateModal() {
    const modal = document.getElementById(modalId);
    modal?.style.setProperty('display', 'none');
  }

  return (
    <div className="modal-close">
    <button type="button" onClick={handleStateModal}>
      FECHAR
    </button>
  </div>
  );
}