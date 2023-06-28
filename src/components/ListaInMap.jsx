import React from 'react';
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { useContext } from 'react';
import { AppContext } from '../App';

export const FarmaciasMap = () => {
  const DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
  });

  L.Marker.prototype.options.icon = DefaultIcon;

  const { listaFarma } = useContext(AppContext);

  // para um cáuculo mais eficiente da posição do centro, seria adequado
  // calcular a médiana da latitude e da longitude e identificar os valores
  // maximos e mínimos para determinar a área apresentada que cubra todas
  // as farmácias - a ser implementado posteriormente

  const center = [-27.5966, -48.5481];

  const MapComponent = ({ locations }) => {
    return (
      <MapContainer center={[-27.5906434, -48.5506324]} zoom={13} style={{ height: '500px', width: '100%' }}
        className="bg-secondary-subtle border border-secondary-subtle rounded-3">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        {locations.map((location, index) => (
          <Marker key={index} position={[location.lat, location.lng]}>
            <Popup>
               <h5>{location.nomefantasia}</h5>
               <hr />
               <p>{location.rasaosocial}</p>
               <h6>CNPJ: {location.cnpj}</h6>
               <h6>E-mail: {location.email}</h6>
               <h6>Tel:{location.telefone}</h6>
               <h6>
                 <a
                   href={
                     'https://wa.me/55' + location.celular.replace(/\D/g, '')
                   }
                   target="_blank"
                 rel="noopener noreferrer"
                 >
                   <img src="./wa.png" alt="" width={25} />
                   {location.celular}
                 </a>
               </h6>
               <hr />
               <h5>Endereço</h5>
               <h6>
                 {location.rua}, {location.numero}, {location.bairro}
               </h6>
               <h6>
                 {location.cidade} - {location.uf} - CEP {location.cep}
               </h6>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    );
  };

  return (
    <div className="p-2 mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-4">
      <MapComponent locations={listaFarma} />
    </div>
  );
};
