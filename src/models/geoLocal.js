// Apenas retorna latitude e longitude
import { AppContext } from '../App';
import { useContext } from 'react';

export const GetGeoLocal = address => {
  const { setGeoLocal } = useContext(AppContext);

  fetch(`https://geocode.maps.co/search?${address}`, {
    method: 'GET',
    headers: { 'Content-type': 'application/json;charset=UTF-8' },
  })
    .then(resposta => resposta.json())
    .then(dados => {
      setGeoLocal(dados);
    })
    .catch(error => console.log(error));
};
