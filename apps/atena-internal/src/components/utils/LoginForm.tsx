import React, { useState } from "react"
import "./LoginForm.css"
import logo from "../../assets/images/logo_webhelp.svg";
import { ILogin } from "../../types/ILogin";

export default function LoginForm() {

  const [formData, setFormData] = useState<ILogin>({email_type: "", password: "", user: ""});
  
  const handleValueChange = (e: any) => {
    const { name, value } = e.target;
    setFormData({...formData, [name]: value});
  }

  const handleLogin = async () => {
    try {
      console.log(formData);
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
  
  const handleSubmit = (e: any ) => {
    
    e.preventDefault();
    handleLogin();
  }
  
  return (
    
    <div className="container form">
        <div className="form__content">
          <div className="form__header">
            <img src={logo} alt="Logo Webhelp" />
            <div className="form__header__text">
              <span>Login</span>
              <span>Insira seus dados de acesso para prosseguir.</span>
            </div>
          </div>
          <div className="container form__input">
            <form onSubmit={handleSubmit}>
              <fieldset>
                  <label htmlFor="user">Login</label>
                <fieldset className="input__email">
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
              </fieldset>
            </form>
          </div>
        </div>
      </div>
  )
}