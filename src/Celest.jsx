/* eslint-disable no-console */
import axios from 'axios';
import { useState, useEffect } from 'react';

// eslint-disable-next-line no-unused-vars
function Asteroids() {
  // eslint-disable-next-line no-unused-vars
  const [asteroids, setAsteroids] = useState([]);
  useEffect(() => {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?api_key=us2MndB2OwcMCT887aznbmPtSzxIs5FydFkRGnNy&start_date=2021-11-01&end_date=2021-11-07',
      )
      .then((res) => res.data)
      .then((data) => {
        setAsteroids(data);
        console.log(data);
      });
  }, []);

  return (
    <div>
      <button type="button">get asteroids</button>
    </div>
  );
}

export default Asteroids;
