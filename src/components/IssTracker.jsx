import React from 'react';
import styled from 'styled-components';
import MyMap from './Map';
import VideoIss from './VideoIss';
import IssCardInfo from './IssTrackerInfo';

function IssTracker() {
  return (
    <DivIssTracker>
      <Title>Tracker l&apos;ISS</Title>
      <MapAndCard>
        <MyMap />
        <IssCardInfo />
      </MapAndCard>
      <Title>L&apos;ISS en direct</Title>
      <VideoIss />
    </DivIssTracker>
  );
}

const DivIssTracker = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: auto;

  @media (min-width: 768px) {
    width: 90%;
    margin: 5rem auto;
    justify-content: center;
  }
`;
const Title = styled.h2`
  color: #041844;
  margin: 2em;
  text-align: center;
`;
const MapAndCard = styled.div`
  display: flex;
  justify-content: space-space-evenly;
  margin: auto;
`;

export default IssTracker;
