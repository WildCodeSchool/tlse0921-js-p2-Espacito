import axios from 'axios';
import { useState, useEffect } from 'react';
import NeoCard from './NeoCard';

function Asteroids() {
  const [asteroids, setAsteroids] = useState([]);
  const mergeAsteroids = (carry, current) => [...carry, ...current];
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?api_key=5DkKfSr7JIgCWyphOgl8F6Qod6mXMdiXytAwcixA',
      )
      .then((res) => res.data.near_earth_objects)
      .then((data) => Object.values(data))
      .then((data) => data.reduce(mergeAsteroids, []).reverse())
      .then((celestObjects) => {
        setAsteroids(celestObjects);
      });
  }, []);

  return (
    <div>
      {asteroids.map((asteroid) => (
        <NeoCard asteroid={asteroid} />
      ))}
    </div>
  );
}

export default Asteroids;
