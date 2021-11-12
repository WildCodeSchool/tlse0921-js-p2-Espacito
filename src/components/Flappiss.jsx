import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import IssPicture from './IssPicture';

const Flappiss = () => {
  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }
  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions(),
    );
    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions());
      }
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);
    return windowDimensions;
  }
  const { width, height } = useWindowDimensions();
  const screenWidth = width;
  const screenHeight = height;
  // eslint-disable-next-line no-unused-vars
  const birdLeft = screenWidth / 2;
  const [birdBottom, setBirdBottom] = useState(screenHeight / 2);
  const gravity = 3;
  let gameTimerId = null;
  // eslint-disable-next-line consistent-return
  useEffect(() => {
    if (birdBottom > 0) {
      setInterval(() => {
        gameTimerId = setBirdBottom((birdBot) => birdBot - gravity);
      }, 30);
      return () => {
        clearInterval(gameTimerId);
      };
    }
  }, [birdBottom]);
  return (
    <div>
      <TitleH1> Flapp&apos;ISS</TitleH1>
      <GameContainer>
        <IssPicture birdBottom={birdBottom} birdLeft={birdLeft} />
      </GameContainer>
    </div>
  );
};

const GameContainer = styled.div`
  display: flex;
  flex: 1;
  background-color: #a80c0c;
  align-items: center;
  justify-content: center;
  width: ${(screenWidth) => screenWidth};
  height: ${(screenHeight) => screenHeight};
`;

const TitleH1 = styled.h1`
  text-align: center;
  margin: 4rem 0;
`;

export default Flappiss;
