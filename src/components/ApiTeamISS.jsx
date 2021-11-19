/* eslint-disable react/button-has-type */
import axios from 'axios';
import { useState } from 'react';
import styled from 'styled-components';
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
      .catch((err) => console.log(err));
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
