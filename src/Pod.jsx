import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PodCard from './components/PodCard';
import SearchDate from './components/SearchDate';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
`;
const Button = styled.button`
  background-color: #041844;
  display: flex;
  border: 0;
  color: #fff;
  align-items: center;
  padding: 10px;
`;

const Title = styled.h2`
  color: #041844;
  margin-top: 2em;
  text-align: center;
`;

function Pod() {
  const [pod, setPod] = useState(true);
  useEffect(() => {
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
  }, []);

  const [filterDate, setFilterDate] = useState(true);
  const handleFilterDate = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=YxKu62GPMSmUuDfgz1qfiTbHi5IPzvo8ddeExrgH&date=${filterDate}`,
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
        setFilterDate(data);
      });
  };

  return (
    <div>
      <PodCard pod={pod} />
      <Container>
        <Title>Personnalisez votre image </Title>
        <input
          id="filter-date"
          type="date"
          value={filterDate}
          onChange={(e) => setFilterDate(e.target.value)}
        />

        <Button type="button" onClick={handleFilterDate}>
          Découvrir la photo personnalisée
        </Button>
      </Container>
      <SearchDate filterDate={filterDate} />
    </div>
  );
}

export default Pod;
