import styled from 'styled-components';
import { useState } from 'react';
import AstroModal from './AstroModal';
import Button from './Button';

const AstroDetails = ({ astronaut }) => {
  const [showModal, setShowModal] = useState(false);
  const openModal = () => {
    setShowModal((prev) => !prev);
  };

  return (
    <>
      <Cardcontainer>
        <h2>{astronaut.name}</h2>
        <img
          src={astronaut.image}
          alt={astronaut.image}
          width="200"
          height="300"
        />
        <h3>{astronaut.country}</h3>
        <Button
          onClick={openModal}
          colorButton="white"
          textButton="#041844ff"
          fontSize="20px"
          minWidth="100px"
          paddingButton="16px 32px"
        >
          Plus d&apos;infos
        </Button>
      </Cardcontainer>
      <AstroModal
        showModal={showModal}
        setShowModal={setShowModal}
        name={astronaut.name}
        country={astronaut.country}
        image={astronaut.image}
        agency={astronaut.agency}
        position={astronaut.position}
        spacecraft={astronaut.spacecraft}
        url={astronaut.url}
      />
    </>
  );
};

const Cardcontainer = styled.div`
  text-align: center;
  background-color: #041844ff;
  color: white;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 51px;
  padding: 15px 15px 35px;
  margin: 30px 0;
  min-width: 400px;

  h2,
  h3 {
    color: white;
  }

  @media (max-width: 1271px) {
    padding: 5px;
    margin: 10px;
    min-width: 300px;
  }
`;

export default AstroDetails;
