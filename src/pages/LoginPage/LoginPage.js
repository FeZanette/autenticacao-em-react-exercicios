import React from "react";
import { useNavigate } from "react-router-dom";
import { goToFeed, goToSignUp } from "../../routes/coordinator.js";
import { FormContainer, InputContainer } from "./styled.js";
import useForm from "../../hook/useForm.js";
import axios from "axios";
import { baseURL } from "../../constants/baseURL.js";

// Exercício 2
// Na página LoginPage utilize o endpoint Login para implementar a função de logar na aplicação. Salve o token no Local Storage. Assim que um usuário logar na aplicação, ele deve ser redirecionado para a página de Feed.

function LoginPage() {

  const { form, onChange, clearFields } = useForm({
    email: "",
    password: "",
  });
  
  const navigate = useNavigate();
 
  const enviarLogin = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/user/login`, form)
      .then((res) => {
        console.log(res.data.token);
        localStorage.setItem("token", res.data.token);
        clearFields();
        goToFeed(navigate);
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <main>
      <h1>Login</h1>
      <FormContainer onSubmit={enviarLogin} >
        <InputContainer>
          <label htmlFor="email">E-mail:</label>
          <input
            id="email"
            name="email"
            value={form.email}
            onChange={onChange}
            required
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="password">Senha:</label>
          <input
            id="password"
            name="password"
            value={form.password}
            onChange={onChange}
            required
          />
        </InputContainer>
        <button>Entrar</button>
        <button onClick={() => goToSignUp(navigate)}>Não tenho cadastro</button>
      </FormContainer>
    </main>
  );
}

export default LoginPage;
