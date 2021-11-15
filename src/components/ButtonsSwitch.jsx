import React from 'react';
import styled from 'styled-components';

function ButtonsSwitch({ setMapIss, setInfo, setVideoIss }) {
  return (
    <ButtonsDiv>
      <Button
        type="button"
        onClick={() => {
          setMapIss(true);
          setInfo(false);
          setVideoIss(false);
        }}
      >
        Carte de l&apos;ISS
      </Button>
      <Button
        type="button"
        onClick={() => {
          setMapIss(false);
          setInfo(true);
          setVideoIss(false);
        }}
      >
        Informations
      </Button>
      <Button
        type="button"
        onClick={() => {
          setMapIss(false);
          setInfo(false);
          setVideoIss(true);
        }}
      >
        Vidéo en direct
      </Button>
    </ButtonsDiv>
  );
}

const Button = styled.button`
  background-color: #041844;
  display: flex;
  color: #fff;
  align-items: center;
  padding: 10px;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  width: 33%;
  text-align: center;
`;
const ButtonsDiv = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  @media (min-width: 768px) {
    display: none;
  }
`;

export default ButtonsSwitch;
