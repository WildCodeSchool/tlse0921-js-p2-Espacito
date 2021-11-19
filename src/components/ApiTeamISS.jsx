/* eslint-disable react/button-has-type */
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import TeamISSCard from './TeamIssCard';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  width: 980px;
  justify-content: space-around;
  margin-top: 2em;
  margin-bottom: 4em;
`;

function ApiTeamISS() {
  const [teamIss, setTeamIss] = useState([]);

  const getIssTeam = () => {
    axios
      .get(
        'https://corquaid.github.io/international-space-station-APIs/JSON/people-in-space.json',
      )
      .then((res) => res.data)
      .then((data) => {
        setTeamIss(data.people);
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

  return (
    <div>
      <h1>Présentation de la team ISS</h1>
      <Container>
        <button onClick={getIssTeam}>Get Team ISS</button>

        {teamIss
          .filter((el) => el.iss === true)
          .map((team) => (
            <TeamISSCard team={team} />
          ))}
      </Container>
    </div>
  );
}

export default ApiTeamISS;
