import React, { useEffect, useState } from 'react';
import {
  MapContainer, TileLayer, Marker, Popup,
} from 'react-leaflet';
import L from 'leaflet';
import issIcon from '../iss-icon.png';
// import '../Map.css';

const MyMap = () => {
  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);
  async function getISS() {
    const res = await fetch('http://api.open-notify.org/iss-now.json');
    const data = await res.json();
    setLat(data.iss_position.latitude);
    setLng(data.iss_position.longitude);
  }
  const myIcon = new L.Icon({
    iconUrl: issIcon,
    iconRetinaUrl: issIcon,
    popupAnchor: [0, 0],
    iconSize: [30, 30],
  });

  //   const changeView = () => {
  //     const { current = {} } = useRef;
  //     const { leafletElement: map } = current;
  //     map.setView(lat, lng);
  //   };
  useEffect(() => {
    getISS();
    const int = setInterval(getISS, 10000);
    return () => clearInterval(int);
  }, []);

  //   useEffect(()=>{
  //       changeView();
  //   });
  //   function ChangeView({ center, zoom }) {
  //     const map = useMap();
  //     map.setView(center, zoom);
  //     return null;
  //   }

  return (
    <div>
      <MapContainer
        style={{ height: '400px', width: '500px' }}
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
          <Popup>this is a custom map marker.</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
export default MyMap;
