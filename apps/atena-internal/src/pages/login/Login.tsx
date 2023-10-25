import React from "react";

import extendedLogo from "../../../public/assets/images/extended_logo_webhelp.svg";
import whiteW from "../../../public/assets/images/white_w.png";
import blueW from "../../../public/assets/images/blue_w.svg";
import arrows from "../../../public/assets/images/arrows.svg";

import "./Login.css";
import LoginForm from "../../components/utils/LoginForm";

export function Login() {
  return (
    <div className="container login">
      <div className="container login__header">
        <div className="logo">
          <img src={extendedLogo} alt="Logo Webhelp" />
        </div>
        <div className="login__text">
          <span>Seja</span>
          <span>bem-vindo(a)</span>
          <span>ao Atena.</span>
        </div>
        <div className="login__subfooter">
          <span>Plataforma desenvolvida</span>
          <span>pela <b>Webhelp + Concentrix</b></span>
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
