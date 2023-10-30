import React, { useRef } from "react";

import './ButtonClose.css';

interface ButtonCloseProps {
  modalRef: React.RefObject<HTMLDivElement>;
}

export function ButtonClose({modalRef}: ButtonCloseProps) {
  
  function handleStateModal() {
    if (modalRef.current) {
      modalRef.current.style.display = 'none';
    }
  }

  return (
    <div className="modal-close">
    <button type="button" onClick={handleStateModal}>
      FECHAR
    </button>
  </div>
  );
}