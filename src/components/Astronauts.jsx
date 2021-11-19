import axios from 'axios';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import AstroDetails from './AstroDetails';

function Astronauts() {
  const [astros, setAstros] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json',
      )
      .then((response) => response.data)
      .then((response) => {
        setAstros(response.people);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Certaines informations sont indisponibles pour le moment ! Revenez un peu plus tard !',
        });
      });
  }, []);
  return (
    <div>
      <Title>
        <h1>Equipage de l&apos;ISS</h1>
      </Title>
      <Astrocontainer>
        {astros
          .filter((onIss) => onIss.iss === true)
          .map((astronaut) => (
            <AstroDetails astronaut={astronaut} />
          ))}
      </Astrocontainer>
    </div>
  );
}

const Title = styled.div`
  text-align: center;
`;

const Astrocontainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  width: 80%;
  margin: auto;

  @media (max-width: 1271px) {
    display: flex;
    flex-direction: row wrap;
    align-items: center;
  }
`;

export default Astronauts;
