import { useEffect } from "react";
import { goToLogin, irParaLogin } from "../routes/coordinator";
import { useNavigate } from "react-router-dom";


// Exercício 3
// Proteja a página de Feed (Get all recipes) para que seja acessível apenas para usuários autenticados e autorizados. Se quiser, crie um Custom Hook para isso!

// EXERCÍCIO DE FIXAÇÃO:
// 1) Na pasta hooks, criar arquivo useProtectedPage
// 2) Não precisa retornar nada
// 3) Na página onde esse hook será usado apenas chamar a função useProtectedPage() 

export const useProtectedPage = () => {
    const navigate = useNavigate()
    const token = localStorage.getItem("token");

  useEffect(() => {
    if (!token) {
      goToLogin(navigate);
    }
  }, [navigate]);
};