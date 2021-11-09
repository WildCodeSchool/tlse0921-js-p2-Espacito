import styled from 'styled-components';
import {
  TileLayer, Marker, Popup, MapContainer,
} from 'react-leaflet';
import L from 'leaflet';
import issIcon from '../iss-icon.png';

const MyMap = ({
  lat, lng, latGeoloc, lngGeoloc,
}) => {
  // async function getISS() {
  //   const res = await fetch('http://api.open-notify.org/iss-now.json');
  //   const data = await res.json();
  //   setLat(data.iss_position.latitude);
  //   setLng(data.iss_position.longitude);
  // }
  const myIcon = new L.Icon({
    iconUrl: issIcon,
    iconRetinaUrl: issIcon,
    popupAnchor: [0, 0],
    iconSize: [30, 30],
  });
  return (
    <DivMap>
      <MapCont
        style={{ height: '500px', width: '600px' }}
        center={[lat, lng]}
        zoom={1}
        scroollWheelZoom={false}
      >
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
      </MapCont>
    </DivMap>
  );
};

const DivMap = styled.div`
  display: flex;
  justify-content: space-between;
`;
const MapCont = styled(MapContainer)`
  margin: auto;
`;

export default MyMap;
