import React, { useEffect, useState } from "react";
import { BASE_URL } from "../constants/BASE_URL";
import axios from "axios";

// PRÁTICA 2:
// 1) Passar o headers como parâmetro na função useRequestData
// 2) No axios, além da URL também tem que passar o headers de autorização
// 3) Na página Feed.js, passar o parâmetro headers como outro argumento. Cria o objeto config e chama o headers dentro com a authorization token. Cria a variável token que pega o token do localStorage. Por fim, chama o config no [posts]

export default function useRequestData(initialState, path, headers) {
  const [dados, setDados] = useState(initialState);
  const [erro, setErro] = useState("");

  const receiveData = () => {
    axios
      .get(`${BASE_URL}${path}`, headers)
      .then((response) => {
        setDados(response.data);
      })
      .catch((error) => {
        console.log(error.response);
        setErro(error.response);
      });
  };

  useEffect(() => {
    receiveData();
  }, [path]);

  return [dados, receiveData, error];
}