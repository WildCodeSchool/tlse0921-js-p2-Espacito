import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const IssCardInfo = ({ distance, risetime, duration }) => {
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
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Certaines informations sont indisponibles pour le moment ! Revenez un peu plus tard !',
        });
      });
  };
  useEffect(() => {
    getIssCaract();
    const int = setInterval(getIssCaract, 10000);
    return () => clearInterval(int);
  }, []);
  const date = new Date(risetime * 1000);
  return (
    <CardInfo>
      <Title>Quelques informations en temps réel</Title>
      <InfoList>
        <li>
          <h3>Prochain passage au dessus de ta tête :</h3>
          <p>
            Le prochain passage de la station sera le{' '}
            {date.getDate().toString().slice(-2)}/
            {parseInt(date.getMonth().toString().slice(-2), 10) + 1}/
            {date.getFullYear()} à {date.getHours()}h{date.getMinutes()}.<br />
            Il sera visible pendant {Math.floor(duration / 60)} minutes{' '}
            {duration % 60} secondes.
          </p>
        </li>
        <li>
          <h3>Distance entre l&apos;ISS et toi :</h3>
          <p>{distance} km</p>
        </li>
        <li>
          <h3>Altitude de la station :</h3>
          <p>{altitude} km</p>
        </li>
        <li>
          <h3>Vitesse de la station :</h3>
          <p>{velocity} km/h</p>
        </li>
        <li>
          {visibility === 'daylight' ? (
            <p>
              <img
                src="https://img.icons8.com/doodle/48/000000/sun--v1.png"
                alt="Soleil"
              />
              <br />
              L&apos;ISS est actuellement du côté <strong>jour</strong> de la
              Terre.
            </p>
          ) : (
            <p>
              <img
                src="https://img.icons8.com/doodle/48/000000/bright-moon--v1.png"
                alt="Lune"
              />
              <br />
              L&apos;ISS est actuellement du côté <strong>nuit</strong> de la
              Terre.
            </p>
          )}
        </li>
      </InfoList>
    </CardInfo>
  );
};

const CardInfo = styled.div`
  @media (min-width: 768px) {
    width: 82%;
    margin: 0 auto;
  }
`;
const Title = styled.h2`
  color: #041844;
  margin: 1em;
  text-align: center;
`;
const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  width: 65%;
  background-color: white;
  margin: 1em auto;
  padding: 2em 1em;
  justify-content: flex-start;
  align-items: center;

  @media (min-width: 768px) {
    border: 4px solid black;
    border-radius: 51px;
  }
`;

export default IssCardInfo;
