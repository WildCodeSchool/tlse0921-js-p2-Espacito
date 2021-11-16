import React from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';
import L from 'leaflet';
import issIcon from '../iss-icon.png';

function IssStation({ lat, lng }) {
  const map = useMap();
  map.panTo(new L.LatLng(lat, lng));
  const myIcon = new L.Icon({
    iconUrl: issIcon,
    iconRetinaUrl: issIcon,
    popupAnchor: [0, 0],
    iconSize: [60, 60],
  });
  return (
    <Marker position={[lat, lng]} icon={myIcon}>
      <Popup>La station ISS est ici !</Popup>
    </Marker>
  );
}
export default IssStation;
