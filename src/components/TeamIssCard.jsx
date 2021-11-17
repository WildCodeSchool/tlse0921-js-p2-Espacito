/* eslint-disable react/button-has-type */
import styled from 'styled-components';

const Card = styled.div`
  width: 33%;
  flex-wrap: wrap;
`;

const TeamISSCard = ({ team }) => (
  <Card>
    <h3>{team.name}</h3>
    <p>{team.country}</p>
    <p>{team.spacecraft}</p>
    <p>{team.position}</p>
    <img src={team.image} alt={team.name} width="200" height="300" />;
    <p>
      <button typeof="button">
        <a href={team.url}>En savoir plus</a>
      </button>
    </p>
  </Card>
);

export default TeamISSCard;
