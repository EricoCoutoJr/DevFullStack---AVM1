import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { useContext } from 'react';
import { AppContext } from '../App';

export const FarmaciasMap = () => {
  const { listaFarma } = useContext(AppContext);

  const center = [-27.5969, -48.5495];

  return (
    <div className="p-3 mx-5 my-4 shadow bg-secondary-subtle border border-secondary-subtle rounded-3">
      <MapContainer
        style={{ height: '400px' }}
        id="mapid"
        center={center}
        zoom={13}
        scrollWheelZoom={true}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {/* {listaFarma.map(farmacia => (
        <Marker key={farmacia.id} position={farmacia.geoLocal}>
        <Popup>
        <div>
        <p>{farmacia.razaosocial}</p>
        <p>{farmacia.nomefantasia}</p>
        <p>{farmacia.telefone}</p>
        <p>{farmacia.celular}</p>
        <p>{farmacia.email}</p>
        <p>
        {farmacia.rua}, {farmacia.numero}, {farmacia.bairro}
        </p>
        <p>
        {farmacia.cidade} - {farmacia.uf}, {farmacia.cep}
        </p>
        </div>
        </Popup>
      </Marker> */}
        {/* ))} */}
      </MapContainer>
    </div>
  );
};
