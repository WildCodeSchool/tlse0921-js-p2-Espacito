import React from 'react';
import styled from 'styled-components';

function IssCardInfo() {
  return (
    <CardInfo>
      <h2>Quelques informations en temps réel</h2>
      <InfoList>
        <li>
          <h3>Vous êtes actuellement à :</h3>
        </li>
        <li>
          <h3>Prochain couchers de soleil :</h3>
        </li>
        <li>
          <h3>Prochain lever de soleil :</h3>
        </li>
      </InfoList>
    </CardInfo>
  );
}

const CardInfo = styled.div`
  max-width: 40%;
  display: flex;
  flex-flow: column wrap;
`;
const InfoList = styled.ul`
  list-style: none;
  display: flex;
  flex-flow: column wrap;
  margin: 2em;
`;

export default IssCardInfo;
