import React from "react";

import extendedLogo from "../../assets/images/extended_logo_webhelp.svg";
import whiteW from "../../assets/images/white_w.png";
import blueW from "../../assets/images/blue_w.svg";
import arrows from "../../assets/images/arrows.svg";

import "./Login.css";
import LoginForm from "../../components/utils/LoginForm";

export function Login() {
  return (
    <div className="container login">
      <div className="login__header">
        <div className="logo">
          <img src={extendedLogo} alt="Logo Webhelp" />
        </div>
        <div className="login__text">
          <h1>
            Seja<br/>
            bem-vindo(a)<br/>
            <span>ao Atena.</span>
          </h1>
        </div>
        <div className="login__subfooter">
          <h5>Plataforma desenvolvida</h5>
          <h5>pela <b>Webhelp + Concentrix</b></h5>
        </div>
        <div className="login__bg">
          <div className="colored-w">
            <img src={whiteW} />
            <img src={blueW} />
          </div>
          <div className="arrows">
            <img src={arrows} />
          </div>
        </div>
      </div>
      <LoginForm />
    </div>
  );
}
