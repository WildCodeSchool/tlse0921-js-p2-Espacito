import styled from 'styled-components';
import {
  TileLayer, Marker, Popup, MapContainer,
} from 'react-leaflet';
import L from 'leaflet';
import issIcon from '../iss-icon.png';
import LocationMarker from './MapCenter';
// import {link} from 'react-router-dom';

const Map = ({
  lat, lng, latGeoloc, lngGeoloc,
}) => {
  const myIcon = new L.Icon({
    iconUrl: issIcon,
    iconRetinaUrl: issIcon,
    popupAnchor: [0, 0],
    iconSize: [30, 30],
  });
  return (
    <DivMap>
      <Title>Tracker l&apos;ISS</Title>
      <MapCont center={[lat, lng]} zoom={4} scroollWheelZoom={false}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a
                href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[lat, lng]} icon={myIcon}>
          <Popup>Station ISS</Popup>
        </Marker>
        <Marker position={[latGeoloc, lngGeoloc]}>
          <Popup>Vous êtes ici !</Popup>
        </Marker>
        <LocationMarker />
      </MapCont>
    </DivMap>
  );
};

const DivMap = styled.div`
  display: block;
`;
const MapCont = styled(MapContainer)`
  height: 550px;
  width: 100%;
  margin: auto;
`;
const Title = styled.h2`
  color: #041844;
  margin: 1em;
  text-align: center;
`;

export default Map;
