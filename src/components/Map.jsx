import React, { useEffect, useState } from 'react';
import {
  TileLayer, Marker, Popup, MapContainer,
} from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import issIcon from '../iss-icon.png';

const MyMap = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [coords, setCoords] = useState([0, 0]);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setCoords([position.coords.latitude, position.coords.longitude]);
      });
    }
  }, []);
  // let map = L.map('map').setView([lat, lng], 6);
  const getISS = () => {
    axios
      .get('http://api.open-notify.org/iss-now.json')
      .then((res) => res.data)
      .then((data) => {
        setLat(data.iss_position.latitude);
        setLng(data.iss_position.longitude);
      });
  };
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
  useEffect(() => {
    getISS();
    const int = setInterval(getISS, 10000);
    return () => clearInterval(int);
  }, []);
  return (
    <divMap>
      <MapContainer
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
          <Popup>This is the ISS station</Popup>
        </Marker>
        <Marker position={coords}>
          <Popup>This is you</Popup>
        </Marker>
      </MapContainer>
    </divMap>
  );
};

// const divMap = styled.div`
//   display: flex;
// `;

export default MyMap;
