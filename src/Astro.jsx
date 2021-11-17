/* eslint-disable react/button-has-type */
/* eslint-disable no-unused-vars */
import axios from 'axios';
import { useState } from 'react';
import AstronautDetails from './components/AstronautDetails';

function Astronautes() {
  const [astronauts, setAstronauts] = useState([]);

  const getAstronauts = () => {
    axios
      .get('http://api.open-notify.org/astros.json')
      .then((res) => res.data)
      .then((data) => {
        setAstronauts(data.people);
      });
  };

  return (
    <div>
      <p>Coucou</p>
      <button onClick={getAstronauts}>Get Astronauts</button>
      {astronauts.map((astronaut) => (
        <AstronautDetails astronaut={astronaut} />
      ))}
    </div>
  );
}

export default Astronautes;
