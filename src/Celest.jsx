import axios from 'axios';
import { useState } from 'react';

function Asteroids() {
  // eslint-disable-next-line no-unused-vars
  const [asteroids, setAsteroids] = useState([]);
  function getAsteroids() {
    axios
      .get(
        'https://api.nasa.gov/neo/rest/v1/feed?api_key=us2MndB2OwcMCT887aznbmPtSzxIs5FydFkRGnNy&start_date=2021-11-01&end_date=2021--20',
      )
      .then((res) => res.data.near_earth_objects)
      // .then(() => {

      // })
      .then((data) => {
        setAsteroids(data);
      });
  }

  return (
    <div>
      {/* {asteroids.map((el) => console.log(el))} */}
      <button type="button" onClick={getAsteroids}>
        get asteroids
      </button>
    </div>
  );
}

export default Asteroids;
