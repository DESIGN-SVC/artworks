import React, { useRef } from "react";

import { ButtonClose } from "../ui/ButtonClose";

import coloredLogo from "../../../assets/images/colored_logo.svg";
import sparks from "../../../assets/images/sparks.png";
import whiteW from "../../../assets/images/white_w.png";
import blueW from "../../../assets/images/blue_w.svg";

import './Dados.css';
export function DadosModal() {

  const modalRef = useRef<HTMLDivElement>(null);

  return (
    <div className="modal" id="modal-dados" ref={modalRef}>
      <div className="dados">
        <section className="dados-content">
          <ButtonClose modalRef={modalRef} />
          <div className="dados-body">
            <section className="dados-header">
              <div className="dados-bg">
                <div className="dados-colored-w">
                  <img src={blueW} alt="Fundo decorativo" />
                  <img src={whiteW} alt="Fundo decorativo" />
                </div>
                <div className="dados-sparks">
                  <img src={sparks} alt="Fundo decorativo" />
                </div>
              </div>
              <div className="dados-logo">
                <img src={coloredLogo} alt="Logo Concentrix + Webhelp" />
              </div>
            </section>
            <section className="dados-text">
              <h1>
                Hey, Psiu!
              </h1>
              <h2>
                Faz tempo que você não atualiza seus dados de idiomas.
              </h2>

              <h3>
                É importante para nós que suas informações estejam sempre atualizadas!
              </h3>
              <a href="">
                Clique aqui para dar uma olhada
              </a>
            </section>
          </div>
        </section>
      </div>
    </div>


  );
}