import React from "react";

import extendedLogo from "../../../assets/images/extended_logo_webhelp.svg";
import arrows from "../../../assets/images/arrows.svg";
import dottedArrow from "../../../assets/images/dotted_arrow.png";
import circle from "../../../assets/images/circle.svg";

import './Parabens.css';
export function Parabens() {

  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="container-modal" id="modal-parabens">
      <div className="parabens">
        
        <div className="parabens__content">
          
          <div className="parabens__close">
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              FECHAR
            </button>
          </div>

          <div className="parabens__header">

            <div className="parabens__bg">

              <div className="dotted-arrow">
                <img src={dottedArrow} />
              </div>
              <div className="circle">
                <img src={circle} />
              </div>
              <div className="parabens-arrows">
                <img src={arrows} />
              </div>
            </div>

            <div className="parabens__logo">
              <img src={extendedLogo} alt="Logo Webhelp" />
            </div>

            </div>

            <div className="parabens__text">
              <h1>
                Parabéns
              </h1>
              <h2>
                Por mais um ano<br/> 
                trabalhando conosco!
              </h2>
              <h3>
                A satisfação que nosso trabalho nos<br/>
                proporciona é sinal de que<br/>
                soubemos escolhê-lo.
              </h3>

              <h6>
                Clarice Lispector
              </h6>
            </div>
          </div><div className="parabens__content">
          
          <div className="parabens__close">
            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
              FECHAR
            </button>
          </div>

          <div className="parabens__header">

            <div className="parabens__bg">

              <div className="dotted-arrow">
                <img src={dottedArrow} />
              </div>
              <div className="circle">
                <img src={circle} />
              </div>
              <div className="parabens-arrows">
                <img src={arrows} />
              </div>
            </div>

            <div className="parabens__logo">
              <img src={extendedLogo} alt="Logo Webhelp" />
            </div>

            </div>

            <div className="parabens__text">
              <h1>
                Parabéns
              </h1>
              <h2>
                Por mais um ano<br/> 
                trabalhando conosco!
              </h2>
              <h3>
                A satisfação que nosso trabalho nos<br/>
                proporciona é sinal de que<br/>
                soubemos escolhê-lo.
              </h3>

              <h6>
                Clarice Lispector
              </h6>
            </div>
          </div>
        </div>
      </div>
  );
}