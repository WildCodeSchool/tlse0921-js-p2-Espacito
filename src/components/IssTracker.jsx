import React, { useEffect, useState } from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import styled from 'styled-components';
import Map from './Map';
import VideoIss from './VideoIss';
import IssCardInfo from './IssTrackerInfo';
import CalculDist from './CalculDist';
import ButtonsSwitch from './ButtonsSwitch';

function IssTracker() {
  const [latIss, setLatIss] = useState(0);
  const [lngIss, setLngIss] = useState(0);

  const [latGeoloc, setLatGeoloc] = useState(0);
  const [lngGeoloc, setLngGeoloc] = useState(0);
  const [duration, setDuration] = useState(0);
  const [risetime, setRisetime] = useState(0);

  const [mapIss, setMapIss] = useState(true);
  const [info, setInfo] = useState(false);
  const [videoIss, setVideoIss] = useState(false);

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
      {/* <Router> */}
      <ButtonsSwitch
        setMapIss={setMapIss}
        setInfo={setInfo}
        setVideoIss={setVideoIss}
      />
      {/* <Switch> */}
      {/* <Route path="/isstracker/map" exact component={Map}> */}
      <CardContainer show={mapIss}>
        <Map
          lat={latIss}
          lng={lngIss}
          latGeoloc={latGeoloc}
          lngGeoloc={lngGeoloc}
        />
      </CardContainer>
      {/* </Route> */}
      <InfoAndVideo>
        {/* <Route path="/isstracker/informations" exact component={IssCardInfo}> */}
        <CardContainer show={info}>
          <IssCardInfo
            distance={CalculDist(lngIss, lngGeoloc, latIss, latGeoloc)}
            risetime={risetime}
            duration={duration}
          />
        </CardContainer>
        {/* </Route> */}
        {/* <Route path="/isstracker/video" exact component={VideoIss}> */}
        <CardContainer show={videoIss}>
          <VideoIss />
        </CardContainer>
        {/* </Route> */}
      </InfoAndVideo>
      {/* </Switch> */}
      {/* </Router> */}
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

const CardContainer = styled.div`
  @media (max-width: 768px) {
    display: ${(props) => (props.show ? 'block' : 'none')};
  }
`;

export default IssTracker;
