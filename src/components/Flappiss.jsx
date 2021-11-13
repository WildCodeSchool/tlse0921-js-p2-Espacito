/* eslint-disable no-undef */
/* eslint-disable no-plusplus */
/* eslint-disable no-unused-vars */
/* eslint-disable prefer-const */
import styled from 'styled-components';
import GameContainer from './GameContainer';
import IssPicture from './IssPicture';

const Flappiss = () => (
  <div>
    <Container>
      <TitleH1> Flapp&apos;ISS</TitleH1>
      <header>
        <ScoreContainer id="score-container">
          <BestScore id="bestScore">
            <p>?</p>
          </BestScore>
          <CurrentScore id="currentScore">
            <p>?</p>
          </CurrentScore>
        </ScoreContainer>
      </header>
      <GameContainer />
    </Container>
  </div>
);

const Container = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    width: 30%;
    margin: 1rem auto;
  }
`;

const TitleH1 = styled.h1`
  text-align: center;
  margin-top: 2rem;
`;

const ScoreContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding: 8px 6px;
  background-color: #041844ff;
`;

const BestScore = styled.div`
  color: white;
`;

const CurrentScore = styled.div`
  color: white;
`;

export default Flappiss;
