import axios from 'axios';
import { useState } from 'react';
import NeoCard from './components/NeoCard';

function Asteroids() {
  const [asteroids, setAsteroids] = useState([]);
  axios
    .get(
      'https://api.nasa.gov/neo/rest/v1/feed?api_key=us2MndB2OwcMCT887aznbmPtSzxIs5FydFkRGnNy&start_date=2021-11-01&end_date=2021-11-07',
    )
    .then((res) => res.data.near_earth_objects)
    .then((data) => {
      setAsteroids(data);
    });

  return (
    <div>
      {asteroids.map((objets) => (
        <NeoCard
          name={objets.name}
          id={objets.id}
          close_approach_date_full={
            objets.close_approach_data[0].close_approach_date_full
          }
          is_potentially_hazardous_asteroid={
            objets.is_potentially_hazardous_asteroid ? 'true' : 'false'
          }
        />
      ))}
    </div>
  );
}

export default Asteroids;
