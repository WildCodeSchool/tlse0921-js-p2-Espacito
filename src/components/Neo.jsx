import axios from 'axios';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import NeoCard from './NeoCard';

function Asteroids() {
  const [asteroids, setAsteroids] = useState([]);
  const [prev, setPrev] = useState(0);
  const [next, setNext] = useState(6);
  const mergeAsteroids = (carry, current) => [...carry, ...current];
  const prevAsteroids = () => {
    if (prev !== 0) {
      setPrev(prev - 6);
      setNext(next - 6);
    }
  };
  const nextAsteroids = () => {
    setPrev(prev + 6);
    setNext(next + 6);
  };
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?api_key=5DkKfSr7JIgCWyphOgl8F6Qod6mXMdiXytAwcixA',
      )
      .then((res) => res.data.near_earth_objects)
      .then((data) => Object.values(data))
      .then((data) => data.reduce(mergeAsteroids, []))
      .then((celestObjects) => {
        setAsteroids(celestObjects);
      });
  }, []);
  
  return (
    <CelestObjectsContent>
      <TitleH1>Objets célestes</TitleH1>
      <AsteroidsCards>
        {asteroids.slice(prev, next).map((asteroid) => (
          <NeoCard asteroid={asteroid} />
        ))}
      </AsteroidsCards>
      <NavButtons>
        <NavButton type="button" onClick={prevAsteroids}>
          Voir les astéroïdes précédents
        </NavButton>
        <NavButton type="button" onClick={nextAsteroids}>
          Voir les astéroïdes suivants
        </NavButton>
      </NavButtons>
    </CelestObjectsContent>

  );
}

const CelestObjectsContent = styled.div`
  margin-bottom: 4rem;
`;

const AsteroidsCards = styled.div`
  margin: auto;

  @media (min-width: 768px) {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0 auto;
  }
`;

const TitleH1 = styled.h1`
  text-align: center;
  margin: 4rem 0;
`;

const NavButtons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 1rem 0;
`;

const NavButton = styled.button`
  background-color: #041844;
  border: 0;
  color: #fff;
  align-items: center;
  padding: 10px;
  margin: 1em;
`;

export default Asteroids;
