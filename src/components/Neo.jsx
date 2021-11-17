import axios from 'axios';
import { useState, useEffect } from 'react';
import NeoCard from './NeoCard';

function Asteroids() {
  const [asteroids, setAsteroids] = useState([]);
  const [showAsteroids, setShowAsteroids] = useState(false);
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
        setShowAsteroids(true);
      });
  }, []);

  const [filterObjects, setFilterObjects] = useState(false);
  const [filterObjectsBig, setFilterObjectsBig] = useState(false);

  const hideAllNeoCard = () => {
    setFilterObjects(true);
    setShowAsteroids(false);
    setFilterObjectsBig(false);
  };

  const hideFilterObject = () => {
    setShowAsteroids(false);
    setFilterObjectsBig(true);
    setFilterObjects(false);
  };

  return (
    <div>
      <div>
        <button type="button" onClick={hideAllNeoCard}>
          Afficher les comètes les plus dangereuses
        </button>
        <button type="button" onClick={hideFilterObject}>
          Afficher les comètes les plus grandes
        </button>
        {!filterObjects && showAsteroids
          ? asteroids.map((asteroid) => <NeoCard asteroid={asteroid} />)
          : null}

        {filterObjects && !showAsteroids
          ? asteroids
            .filter((el) => el.is_potentially_hazardous_asteroid)
            .map((asteroid) => <NeoCard asteroid={asteroid} />)
          : null}

        {filterObjectsBig && !showAsteroids
          ? asteroids
            .filter(
              (el) => el.estimated_diameter.meters.estimated_diameter_max
                  > 631.0154296359,
            )
            .map((asteroid) => <NeoCard asteroid={asteroid} />)
          : null}
      </div>
    </div>
  );
}

export default Asteroids;
