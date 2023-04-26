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

  return (
    <div className="p-3 mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
      <MapContainer
        style={{ height: '400px' }}
        id="mapid"
        center={center}
        zoom={12}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {listaFarma.map(farmacia => {
          return (
            <Marker key={farmacia.id} position={[farmacia.lng, farmacia.lat]}>
              <Popup>
                <h3>{farmacia.nomefantasia}</h3>
                <hr />
                <h6>{farmacia.rasaosocial}</h6>
                <h6>CNPJ: {farmacia.cnpj}</h6>
                <h6>E-mail: {farmacia.email}</h6>
                <h6>Tel:{farmacia.telefone}</h6>
                <a
                  href={
                    'https://wa.me/55' + farmacia.celular.replace(/\D/g, '')
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  WhatsApp: ${farmacia.celular}
                </a>
                <hr />
                <h5>Endereço</h5>
                <h6>
                  {farmacia.rua}, {farmacia.numero}, {farmacia.bairro}
                </h6>
                <h6>
                  {farmacia.cidade} - {farmacia.uf} - CEP {farmacia.cep}
                </h6>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
};
