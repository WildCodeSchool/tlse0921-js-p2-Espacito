import axios from 'axios';
import { useEffect, useState } from 'react';
import NeoCard from './components/NeoCard';

function Asteroids() {
  const [asteroids, setAsteroids] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?api_key=us2MndB2OwcMCT887aznbmPtSzxIs5FydFkRGnNy&start_date=2021-09-13&end_date=2021-09-20',
      )
      .then((res) => res.data)
      .then((data) => ({
        element_count: data.element_count,
        name: data.name,
        id: data.id,
        is_potentially_hazardous_asteroid:
          data.is_potentially_hazardous_asteroid,
        close_approach_date_full: data.close_approach_date_full,
      }))
      .then((data) => {
        setAsteroids(data);
      });
  }, []);

  return (
    <div>
      <NeoCard asteroids={asteroids} />
    </div>
  );
}

export default Asteroids;
