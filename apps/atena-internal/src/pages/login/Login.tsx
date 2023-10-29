import React from "react";

import whiteLogo from "../../assets/images/white_logo.svg";
import whiteW from "../../assets/images/white_w.png";
import blueW from "../../assets/images/blue_w.svg";
import arrows from "../../assets/images/arrows.svg";

import "./Login.css";
import LoginForm from "../../components/utils/LoginForm";

export function Login() {
  return (

    <div className="container login">
      <header className="login-header">
        <div className="logo">
          <img src={whiteLogo} alt="Logo Concentrix + Webhelp" />
        </div>
        <div className="login-text">
          <h1>
            Seja<br />
            bem-vindo(a)<br />
            <span>ao Atena.</span>
          </h1>
        </div>
        <div className="login-subfooter">
          <h5>Plataforma desenvolvida</h5>
          <h5>pela <b>Webhelp + Concentrix</b></h5>
        </div>
        <div className="login-bg">
          <div className="colored-w">
            <img src={whiteW} alt="Fundo decorativo" />
            <img src={blueW} alt="Fundo decorativo" />
          </div>
          <div className="arrows">
            <img src={arrows} alt="Fundo decorativo" />
          </div>
        </div>
      </header>
      <LoginForm />
    </div>

  );
}
