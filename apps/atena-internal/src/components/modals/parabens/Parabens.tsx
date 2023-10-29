import React from "react";

import { ButtonClose } from "../ui/ButtonClose";

import whiteLogo from "../../../assets/images/white_logo.svg";
import arrows from "../../../assets/images/arrows.svg";
import dottedArrow from "../../../assets/images/dotted_arrow.png";
import circle from "../../../assets/images/circle.svg";

import './Parabens.css';
export function ParabensModal() {

  return (
    <div className="container-modal" id="modal-parabens">
      <div className="parabens">
        <main className="parabens-content">
          <ButtonClose modalId="modal-parabens" />
          <div className="parabens-body">
            <section className="parabens-header">
              <div className="parabens-bg">
                <div className="dotted-arrow">
                  <img src={dottedArrow} alt="Fundo decorativo" />
                </div>
                <div className="circle">
                  <img src={circle} alt="Fundo decorativo" />
                </div>
                <div className="parabens-arrows">
                  <img src={arrows} alt="Fundo decorativo" />
                </div>
              </div>
              <div className="parabens-logo">
                <img src={whiteLogo} alt="Logo Webhelp" />
              </div>
            </section>
            <section className="parabens-text">
              <h1>
                Parabéns
              </h1>
              <h2>
                Por mais um ano<br />
                trabalhando conosco!
              </h2>
              <h3>
                A satisfação que nosso trabalho nos<br />
                proporciona é sinal de que<br />
                soubemos escolhê-lo.
              </h3>

              <h6>
                Clarice Lispector
              </h6>
            </section>
          </div>
        </main>
      </div>
    </div>

  );
}