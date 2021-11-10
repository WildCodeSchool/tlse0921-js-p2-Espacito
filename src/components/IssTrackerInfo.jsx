import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const IssCardInfo = ({ distance }) => {
  const [velocity, setVelocity] = useState(0);
  const [altitude, setAltitude] = useState(0);
  const [visibility, setVisibility] = useState(0);

  const getIssCaract = () => {
    axios
      .get('https://api.wheretheiss.at/v1/satellites/25544')
      .then((res) => res.data)
      .then((data) => {
        setVelocity(parseInt(data.velocity, 10));
        setAltitude(parseInt(data.altitude, 10));
        setVisibility(data.visibility);
      });
  };
  useEffect(() => {
    getIssCaract();
    const int = setInterval(getIssCaract, 10000);
    return () => clearInterval(int);
  }, []);
  return (
    <CardInfo>
      <h2>Quelques informations en temps réel</h2>
      <InfoList>
        <li>
          <h3>Distance entre l&apos;ISS et vous :</h3>
          <p>{distance} km</p>
        </li>
        <li>
          <h3>Hauteur :</h3>
          <p>{altitude} km</p>
        </li>
        <li>
          <h3>Vitesse :</h3>
          <p>{velocity} km/h</p>
        </li>
        <li>
          {visibility === 'daylight'
            ? "L'ISS est du côté jour de la Terre."
            : "L'ISS est du côté nuit de la Terre."}
        </li>
      </InfoList>
    </CardInfo>
  );
};

const CardInfo = styled.div`
  /* max-width: 40%; */
  display: flex;
  flex-flow: column wrap;
  width: 90%;
`;
const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  margin: 2em;
`;

export default IssCardInfo;
