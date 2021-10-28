import axios from 'axios';
import React, { useState } from 'react';
import PodCard from './components/PodCard';

function Pod() {
  const [pod, setPod] = useState(true);
  const getPod = () => {
    axios
      .get(
        'https://api.nasa.gov/planetary/apod?api_key=YxKu62GPMSmUuDfgz1qfiTbHi5IPzvo8ddeExrgH',
      )
      .then((res) => res.data)
      .then((data) => ({
        copyright: data.copyright,
        date: data.date,
        explanation: data.explanation,
        image: data.url,
        title: data.title,
      }))
      .then((data) => {
        setPod(data);
      });
  };
  return (
    <div>
      <button type="button" onClick={getPod}>
        Get POD
      </button>
      <PodCard pod={pod} />
    </div>
  );
}

export default Pod;
