import React, { useRef, useEffect, useContext } from 'react';
import L from 'leaflet';
import { renderToString } from 'react-dom/server';
import 'leaflet/dist/leaflet.css';

import { AppContext } from '../App';

export const Mapa = () => {
  const mapRef = useRef(null);
  const { listaFarma } = useContext(AppContext);

  useEffect(() => {
    // Renderiza o mapa na posição e com o zoom definidos
    const map = L.map(mapRef.current).setView([-27.5906434, -48.5506324], 18);

    // Adiciona o tile layer do OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/%22%3EOpenStreetMap</a> contributors',
      maxZoom: 22,
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
      {
        cod: 'Loja 002',
        cnpj: '42.589.746/0002-00',
        razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
        fantasia: 'PharmaLife',
        email: 'contatoloja02@pharmalife.com.br',
        telefone: '(48)8022-4000',
        endereco:
          'Rua Nunes Machado, 50, bairro Centro, Florianópolis/SC CEP 88.050-000',
        latlng: [-27.5908103, -48.5511618],
      },
      {
        cod: 'Loja 003',
        cnpj: '42.589.746/0003-00',
        razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
        fantasia: 'PharmaLife',
        email: 'contatoloja03@pharmalife.com.br',
        telefone: '(48)8022-4000',
        endereco:
          'Rua Menino Deus, 100, bairro Trindade, Florianópolis/SC CEP 88.040-000',
        latlng: [-27.5900094, -48.5264019],
      },
      {
        cod: 'Loja 004',
        cnpj: '42.589.746/0004-00',
        razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
        fantasia: 'PharmaLife',
        email: 'contatoloja04@pharmalife.com.br',
        telefone: '(48)8022-4000',
        endereco:
          'Rua Deputado Antônio Edu Vieira, 800, bairro Santa Mônica, Florianópolis/SC CEP 88.035-240',
        latlng: [-27.5756795, -48.5341766],
      },
      {
        cod: 'Loja 005',
        cnpj: '42.589.746/0005-00',
        razaoSocial: 'LABPharmacy Comércio de Produtos Farmacêuticos S.A.',
        fantasia: 'PharmaLife',
        email: 'contatoloja05@pharmalife.com.br',
        telefone: '(48)8022-4000',
        endereco:
          'Rua Vereador Osni Ortiga, 200, bairro Coqueiros, Florianópolis/SC CEP 88.070-450',
        latlng: [-27.5828794, -48.5711791],
      },
    ];

    listaFarma.forEach(loja => {
      const popupContent = (
        <div>
          <p>Razão social: {loja.razaosocial}</p>
          <p>CNPJ: {loja.cnpj}</p>
          <p>Email: {loja.email}</p>
          <p>Telefone: {loja.telefone}</p>
        </div>
      );
      const popupHTML = renderToString(popupContent);
      L.marker(loja.latlng).addTo(map).bindPopup(popupHTML);
    });
  }, []);

  return (
    <div
      className="p-3 mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3"
      style={{ height: '470px', width: 'auto' }}
      ref={mapRef}
    ></div>
  );
};
