import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {
  TileLayer, Marker, Popup, MapContainer,
} from 'react-leaflet';
import L from 'leaflet';
import axios from 'axios';
import issIcon from '../iss-icon.png';
import CalculDist from './CalculDist';

const MyMap = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  const [latGeoloc, setLatGeoloc] = useState(0);
  const [lngGeoloc, setLngGeoloc] = useState(0);

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatGeoloc(parseInt(position.coords.latitude, 10));
        setLngGeoloc(parseInt(position.coords.longitude, 10));
      });
    }
  }, []);
  const getISS = () => {
    axios
      .get('http://api.open-notify.org/iss-now.json')
      .then((res) => res.data)
      .then((data) => {
        setLat(parseInt(data.iss_position.latitude, 10));
        setLng(parseInt(data.iss_position.longitude, 10));
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
  // CalculDist(lngGeoloc, lng, latGeoloc, lat);
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
          <Popup>This is the ISS station</Popup>
        </Marker>
        <Marker position={[latGeoloc, lngGeoloc]}>
          <Popup>This is you</Popup>
        </Marker>
      </MapCont>
      <div>{CalculDist(lng, lngGeoloc, lat, latGeoloc)}</div>
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
