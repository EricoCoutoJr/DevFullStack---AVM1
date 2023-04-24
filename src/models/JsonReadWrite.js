import { AppContext } from '../App';
import { useContext } from 'react';

export const getDadosMed = () => {
  const { setListaMed } = useContext(AppContext);

  fetch(`http://localhost:3000/med`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
  })
    .then(resposta => resposta.json())
    .then(dados => {
      setListaMed(dados);
    })
    .catch(error => console.log(error));
};

export const getDadosFarma = () => {
  const { setListaFarma } = useContext(AppContext);

  //get no json server
  fetch(`http://localhost:3000/farma`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
  })
    .then(resposta => resposta.json())
    .then(dados => {
      setListaFarma(dados);
    })
    .catch(error => console.log(error));
};

export const postDados = (path, dados) => {
  fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify(dados),
  })
    .then(() => console.log('enviado com sucesso'))
    .catch(error => console.log(error));
};
