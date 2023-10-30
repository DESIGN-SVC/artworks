import React, { useState } from "react";

import logo from "../../assets/images/logo_webhelp.svg";

import "./LoginForm.css";
import { ILogin } from "../../types/ILogin";

export default function LoginForm() {

  const [formData, setFormData] = useState<ILogin>({ email_type: "", password: "", user: "" });

  const handleValueChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  }

  const handleLogin = async () => {
    try {
      const response = await fetch('URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Fazer algo
      } else {
        // Fazer algo
      }
    } catch (error) {
      // Fazer algo c o erro
    }
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    handleLogin();
  }

  return (

    <section className="form">
      <div className="form-content">
        <section className="form-header">
          <img src={logo} alt="Logo Concentrix + Webhelp" />
          <div className="header-text">
            <h2>Login</h2>
            <h2>Insira seus dados de acesso para prosseguir.</h2>
          </div>
        </section>
        <section className="form-input">
          <form onSubmit={handleSubmit}>
            <label htmlFor="user">Login</label>
            <fieldset className="input-email">
              <input type="text" name='user' id='user' onChange={handleValueChange} />
              <select name="email_type" id="email_type" onChange={handleValueChange}>
                <option value="@webhelp.com">@webhelp.com</option>
                <option value="@gruposervices.com">@gruposervices.com</option>
                <option value="@concentrix.com">@concentrix.com</option>
              </select>
            </fieldset>
            <fieldset>
              <label htmlFor="password">Senha</label>
              <input type="password" name='password' id='password' placeholder="" onChange={handleValueChange} />
            </fieldset>
            <button type='submit'>Entrar</button>
          </form>
        </section>
      </div>
    </section>
  )
}