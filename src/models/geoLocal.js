// Apenas retorna latitude e longitude

export const GetGeoLocal = url => {
  return fetch(
    `https://nominatim.openstreetmap.org/search/${url}?format=json&addressdetails=1&limit=1&polygon_svg=1`,
    {
      method: 'GET',
      headers: { 'Content-type': 'application/json;charset=UTF-8' },
    }
  )
    .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .then(lat, lon => console.log(lat, lon))
    .catch(error => console.log(error));
};
