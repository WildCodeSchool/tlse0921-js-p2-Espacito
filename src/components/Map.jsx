import styled from 'styled-components';
import {
  TileLayer, Marker, Popup, MapContainer,
} from 'react-leaflet';
import IssStation from './IssStation';

const Map = ({
  lat, lng, latGeoloc, lngGeoloc,
}) => (
  <DivMap>
    <Title>Tracker l&apos;ISS</Title>
    <MapCont center={[lat, lng]} zoom={3} scroollWheelZoom={false}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a
                href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Marker position={[latGeoloc, lngGeoloc]}>
        <Popup>Vous êtes ici !</Popup>
      </Marker>
      <IssStation lat={lat} lng={lng} />
    </MapCont>
  </DivMap>
);

const DivMap = styled.div`
  display: block;
`;
const MapCont = styled(MapContainer)`
  height: 600px;
  width: 95%;
  margin: auto;
  border-radius: 10px;
`;
const Title = styled.h2`
  color: #041844;
  margin: 1em;
  text-align: center;
`;

export default Map;
