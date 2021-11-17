import {
  cos, sin, asin, sqrt, abs,
} from 'mathjs';

function CalculDist(lng2, lng1, lat2, lat1) {
  const lngY = (Math.PI / 180) * lng2;
  const lngX = (Math.PI / 180) * lng1;
  const latY = (Math.PI / 180) * lat2;
  const latX = (Math.PI / 180) * lat1;

  const dLng = abs(lngY - lngX);
  const dLat = abs(latY - latX);
  const s = sin(dLat / 2) ** 2;
  const a = s + cos(latX) * cos(latY) * sin(dLng / 2) ** 2;
  const c = 2 * asin(sqrt(a));
  const distance = Math.round(6371 * c);
  return distance;
}

export default CalculDist;
