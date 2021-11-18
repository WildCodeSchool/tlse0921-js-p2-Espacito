import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function ButtonsSwitch({
  butMap,
  butInfo,
  butVideo,
  setMapIss,
  setInfo,
  setVideoIss,
}) {
  return (
    <ButtonsDiv>
      <ButtonLink to="/iss-tracker/map">
        <Button
          type="button"
          backColor={butMap}
          color={butMap}
          onClick={() => {
            setMapIss(true);
            setInfo(false);
            setVideoIss(false);
          }}
        >
          Carte de localisation
        </Button>
      </ButtonLink>
      <ButtonLink to="/iss-tracker/informations">
        <Button
          type="button"
          backColor={butInfo}
          color={butInfo}
          onClick={() => {
            setMapIss(false);
            setInfo(true);
            setVideoIss(false);
          }}
        >
          Informations de la station
        </Button>
      </ButtonLink>
      <ButtonLink to="/iss-tracker/video">
        <Button
          type="button"
          backColor={butVideo}
          color={butVideo}
          onClick={() => {
            setMapIss(false);
            setInfo(false);
            setVideoIss(true);
          }}
        >
          Vidéo en direct
        </Button>
      </ButtonLink>
    </ButtonsDiv>
  );
}

const Button = styled.button`
  background-color: ${(props) => (props.backColor ? '#041844ff' : '#fff')};
  color: ${(props) => (props.color ? '#fff' : '#041844ff')};
  padding: 2em 1em;
  margin: 2em 0.5em;
  border: 2px solid #041844ff;
  border-radius: 10px;
  text-transform: uppercase;
  font-weight: 800;
  width: 100%;
`;
const ButtonsDiv = styled.div`
  display: flex;
  justify-content: space-around;

  @media (min-width: 768px) {
    display: none;
  }
`;
const ButtonLink = styled(Link)`
  width: 30%;
`;

export default ButtonsSwitch;
