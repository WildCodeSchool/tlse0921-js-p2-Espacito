import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MyMap from './Map';
import VideoIss from './VideoIss';
import IssCardInfo from './IssTrackerInfo';
import CalculDist from './CalculDist';

function IssTracker() {
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
  useEffect(() => {
    getISS();
    const int = setInterval(getISS, 10000);
    return () => clearInterval(int);
  }, []);
  return (
    <DivIssTracker>
      <Title>Tracker l&apos;ISS</Title>
      <MapAndCard>
        <MyMap
          lat={lat}
          lng={lng}
          latGeoloc={latGeoloc}
          lngGeoloc={lngGeoloc}
        />
        <IssCardInfo distance={CalculDist(lng, lngGeoloc, lat, latGeoloc)} />
      </MapAndCard>
      <Title>L&apos;ISS en direct</Title>
      <VideoIss />
    </DivIssTracker>
  );
}

const DivIssTracker = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;

  @media (min-width: 768px) {
    width: 90%;
    margin: 5rem auto;
    justify-content: center;
  }
`;
const Title = styled.h2`
  color: #041844;
  margin: 2em;
  text-align: center;
`;
const MapAndCard = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  margin: auto;
`;

export default IssTracker;
