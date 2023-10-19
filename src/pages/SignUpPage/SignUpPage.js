import { useNavigate } from "react-router-dom";
import { goToFeed, goToLogin } from "../../routes/coordinator";
import { FormContainer, InputContainer } from "./styled";
import useForm from "../../hook/useForm";
import axios from "axios";
import { baseURL } from "../../constants/baseURL";

// Exercício 1
// Na página SignUpPage utilize o endpoint Signup para implementar a função de cadastro. Salve o token no Local Storage. Assim que um usuário se cadastrar na aplicação, ele deve ser redirecionado para a página de Feed.
// 1) Fazer o hook useForm em um arquivo
// 2) Chamar o useForm desestruturado dentro da função SignPage e com as propriedades (name, email, password) vazias dentro de um objeto
// 3) Fazer os inputs controlados acrescentando name, value e onChange em cada input
// 4) A integração com o endpoint de signup é feita na função enviarCadastro. a requisição é feita com axios. Um token é recebido (fazer um console.log(res.data.token) para poder ver
// 5) Guardar o token recebido no localStorage dentro do then do axios
// 6) Criar a função enviarCadastro. Após fazer o cadastro, redireciona para a página do feed. Na pasta routes -> coordinator, ver qual o nome da função que leva para a página feed (goToFeed). Chamar essa função abaixo da função de limpar campos (clearFields) com o argumento navigate. Criar uma variável navigate chamando o hook useNavigate fora da função.
// 7) Adicionar a função enviarCadastro no onSubmir do form e tirar a função do botão Cadastrar

function SignUpPage() {
  const { form, onChange, clearFields } = useForm({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const enviarCadastro = (e) => {
    e.preventDefault();
    axios
      .post(`${baseURL}/user/signup`, form)
      .then((res) => {
        // console.log(res.data.token);
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
      <h1>Cadastro</h1>
      <FormContainer onSubmit={enviarCadastro}>
        <InputContainer>
          <label htmlFor="name">Nome:</label>
          <input
            id="name"
            name="name"
            value={form.name}
            onChange={onChange}
            required
          />
        </InputContainer>
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

        <button>Cadastrar</button>
        <button onClick={() => goToLogin(navigate)}>Já sou cadastrado</button>
      </FormContainer>
    </main>
  );
}

export default SignUpPage;
