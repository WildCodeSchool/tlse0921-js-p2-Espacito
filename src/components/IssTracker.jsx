import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import MyMap from './Map';
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

  // let date = new Date(1636381445 * 1000);
  // let ladate ='Prochain passage le ' + ('0' + date.getDate()).slice(-2) +
  //   '/' +
  //   ('0' + (date.getMonth() + 1)).slice(-2) +
  //   '/' +
  //   date.getFullYear() +
  //   ' à ' +
  //   date.getHours() +
  //   'h' +
  //   date.getMinutes();

  // const hours = date.getHours();
  // const minutes = `0 ${date.getMinutes()}`;
  // const seconds = `0 ${date.getSeconds()}`;

  useEffect(() => {
    getISS();
    const int = setInterval(getISS, 10000);
    return () => clearInterval(int);
  }, []);

  return (
    <DivIssTracker>
      <Title>Tracker l&apos;ISS</Title>
      <MapAndCard>
        <MapNextPass>
          {mapIss ? (
            <MyMap
              lat={latIss}
              lng={lngIss}
              latGeoloc={latGeoloc}
              lngGeoloc={lngGeoloc}
            />
          ) : null}
          <div>
            {duration} {risetime}
          </div>
        </MapNextPass>
        {info ? (
          <IssCardInfo
            distance={CalculDist(lngIss, lngGeoloc, latIss, latGeoloc)}
          />
        ) : null}
      </MapAndCard>
      {videoIss ? <Title>L&apos;ISS en direct</Title> : null}
      {videoIss ? <VideoIss /> : null}
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
  margin: 1em;
  text-align: center;
`;
const MapAndCard = styled.div`
  display: none;
  flex-direction: column;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-space-evenly;
    margin: auto;
  }
`;
const MapNextPass = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  flex-direction: column;
  margin: auto;
`;
const Button = styled.button`
  background-color: #041844;
  display: flex;
  border: 0;
  color: #fff;
  align-items: center;
  padding: 10px;
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
