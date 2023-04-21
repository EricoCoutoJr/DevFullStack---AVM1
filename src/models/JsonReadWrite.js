import { AppContext } from '../App';
import { useContext } from 'react';

export const getDados = path => {
  const { setListaMed, setListaFarma } = useContext(AppContext);

  const setGet = (path, dados) => {
    if (path === 'farma') {
      setListaFarma(dados);
    }
    if (path === 'med') {
      setListaMed(dados);
    }
  };
  debugger;
  //get no json server
  fetch(`http://localhost:3000/${path}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
  })
    .then(resposta => resposta.json())
    .then(dados => {
      setGet(path, dados);
    })
    .catch(error => console.log(error));
};

export const postDados = (path, dados) => {
  // post no json server
  // post("/listaEndereco", endereco)

  fetch(`http://localhost:3000/${path}`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
    body: JSON.stringify(dados),
  })
    .then(() => console.log('enviado com sucesso'))
    .catch(error => console.log(error));
};
