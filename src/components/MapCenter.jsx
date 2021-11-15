import React, { useEffect, useState } from 'react';
import { Marker, Popup, useMap } from 'react-leaflet';

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const map = useMap();
  useEffect(() => {
    map.locate().on('locationfound', (e) => {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);
  return position === null ? null : (
    <Marker position={position}>
      <Popup>
        Vous êtes ici <br />
      </Popup>
    </Marker>
  );
}
export default LocationMarker;
