import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Map from './Map';
import VideoIss from './VideoIss';
import IssCardInfo from './IssTrackerInfo';
import CalculDist from './CalculDist';

function IssTracker() {
  const [latIss, setLatIss] = useState(0);
  const [lngIss, setLngIss] = useState(0);

  const [latGeoloc, setLatGeoloc] = useState(0);
  const [lngGeoloc, setLngGeoloc] = useState(0);
  const [duration, setDuration] = useState(0);
  const [risetime, setRisetime] = useState(0);

  const [mapIss, setMapIss] = useState(true);
  const [info, setInfo] = useState(true);
  const [videoIss, setVideoIss] = useState(true);

  useEffect(() => {
    axios
      .get(
        `https://magical-it-works.jsrover.wilders.dev/http://api.open-notify.org/iss-pass.json?lat=${latGeoloc}&lon=${lngGeoloc}`,
      )
      .then((res) => res.data)
      .then((data) => {
        setDuration(parseInt(data.response[0].duration, 10));
        setRisetime(parseInt(data.response[1].risetime, 10));
      });
  }, [latGeoloc, lngGeoloc]);

  const getISS = () => {
    axios
      .get('http://api.open-notify.org/iss-now.json')
      .then((res) => res.data)
      .then((data) => {
        setLatIss(parseInt(data.iss_position.latitude, 10));
        setLngIss(parseInt(data.iss_position.longitude, 10));
      });
  };

  useEffect(() => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatGeoloc(parseInt(position.coords.latitude, 10));
        setLngGeoloc(parseInt(position.coords.longitude, 10));
      });
    }
  }, []);

  useEffect(() => {
    getISS();
    const int = setInterval(getISS, 10000);
    return () => clearInterval(int);
  }, []);

  return (
    <DivIssTracker>
      <ButtonsDiv>
        <Button
          type="button"
          onClick={() => {
            setMapIss(true);
            setInfo(false);
            setVideoIss(false);
          }}
        >
          Carte de l&apos;ISS
        </Button>
        <Button
          type="button"
          onClick={() => {
            setMapIss(false);
            setInfo(true);
            setVideoIss(false);
          }}
        >
          Informations
        </Button>
        <Button
          type="button"
          onClick={() => {
            setMapIss(false);
            setInfo(false);
            setVideoIss(true);
          }}
        >
          Vidéo en direct
        </Button>
      </ButtonsDiv>
      {mapIss ? (
        <Map
          lat={latIss}
          lng={lngIss}
          latGeoloc={latGeoloc}
          lngGeoloc={lngGeoloc}
        />
      ) : null}
      <InfoAndVideo>
        {info ? (
          <IssCardInfo
            distance={CalculDist(lngIss, lngGeoloc, latIss, latGeoloc)}
            risetime={risetime}
            duration={duration}
          />
        ) : null}
        {videoIss ? <VideoIss /> : null}
      </InfoAndVideo>
    </DivIssTracker>
  );
}

const DivIssTracker = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 768px) {
    width: 90%;
  }
`;
const InfoAndVideo = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;

  @media (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    margin: auto;
  }
`;
const Button = styled.button`
  background-color: #041844;
  display: flex;
  color: #fff;
  align-items: center;
  padding: 10px;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  width: 33%;
  text-align: center;
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default IssTracker;
