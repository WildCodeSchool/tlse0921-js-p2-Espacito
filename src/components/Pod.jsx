import axios from 'axios';
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import PodCard from './PodCard';
import SearchDate from './SearchDate';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2em;
  margin-bottom: 4em;
`;
const Button = styled.button`
  background-color: #041844;
  display: flex;
  border: 0;
  color: #fff;
  align-items: center;
  padding: 10px;
`;

const TitleTwo = styled.h2`
  color: #041844;
  margin-top: 2em;
  text-align: center;
`;
const Filter = styled.div`
  @media (max-width: 1024px) {
    width: 80%;
    margin: 0 auto;
  }

  @media (max-width: 400px) {
    width: 100%;
  }
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
        date: data.date.split('-').reverse().join('-'),
        explanation: data.explanation,
        image: data.url,
        title: data.title,
        media_type: data.media_type,
      }))
      .then((data) => {
        setPod(data);
      })
      .catch((err) => console.log(err));
  }, []);

  const [showCard, setShowCard] = useState(false);

  const [filterDate, setFilterDate] = useState(true);
  const handleFilterDate = () => {
    axios
      .get(
        `https://api.nasa.gov/planetary/apod?api_key=YxKu62GPMSmUuDfgz1qfiTbHi5IPzvo8ddeExrgH&date=${filterDate}`,
      )
      .then((res) => res.data)
      .then((data) => ({
        copyright: data.copyright,
        date: data.date.split('-').reverse().join('-'),
        explanation: data.explanation,
        image: data.url,
        title: data.title,
        media_type: data.media_type,
      }))
      .then((data) => {
        setFilterDate(data);
      })
      .catch((err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Certaines informations sont indisponibles pour le moment ! Revenez un peu plus tard !',
        });
      });
  };

  const hidePodCard = () => {
    setPod(false);
    setShowCard(true);
  };

  return (
    <div>
      {!showCard ? <PodCard pod={pod} /> : null}
      <TitleTwo>Choisissez une date entre 1997 et aujourd&apos;hui</TitleTwo>
      <Filter>
        <Container>
          <input
            id="filter-date"
            type="date"
            value={filterDate}
            onChange={(e) => setFilterDate(e.target.value)}
          />

          <Button
            type="button"
            onClick={() => {
              handleFilterDate();
              hidePodCard();
            }}
          >
            Découvrir l&apos;image
          </Button>
        </Container>
      </Filter>
      {showCard ? <SearchDate filterDate={filterDate} /> : null}
    </div>
  );
}

export default Pod;
