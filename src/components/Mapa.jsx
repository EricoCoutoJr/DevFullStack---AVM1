import React, { useRef, useEffect } from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';

import 'leaflet/dist/leaflet.css';

export const Mapa = () => {
  const mapRef = useRef(null);

  useEffect(() => {
    // Renderiza o mapa na posição e com o zoom definidos
    const map = L.map(mapRef.current).setView([-27.5998621, -48.5483227], 10);

    // Adiciona o tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/%22%3EOpenStreetMap</a> contributors',
      maxZoom: 10,
    }).addTo(map);

    // Adiciona marcadores para as lojas
    const lojas = [
      {
        cod: 'Loja 001',
        cnpj: '42.589.746/0001-00',
        razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
        fantasia: 'PharmaLife',
        email: 'contatoloja01@pharmalife.com.br',
        telefone: '(48)8022-4000',
        endereco:
          'Rua Presidente Coutinho, 100, bairro Centro, Florianópolis/SC CEP 88.050-000',
        latlng: [-27.5906434, -48.5506324],
      },
    ];

    lojas.forEach(loja => {
      const popupContent = (
        <div>
          <h5>{loja.fantasia}</h5>
          <p>Razão social: {loja.razaoSocial}</p>
          <p>CNPJ: {loja.cnpj}</p>
          <p>Email: {loja.email}</p>
          <p>Telefone: {loja.telefone}</p>
          <p>Endereço: {loja.endereco}</p>
        </div>
      );
      const popupHTML = renderToString(popupContent);
      L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
    });
  }, []);

  return <div style={{ height: '300px', width: 'auto' }} ref={mapRef}></div>;
};
