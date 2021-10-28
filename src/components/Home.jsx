import styled from 'styled-components';
import presentationiss from '../ressources/assets-home/presentation-iss.png';
import isstracker from '../ressources/assets-home/iss-tracker.png';
import celestobjects from '../ressources/assets-home/celest-objects.png';
import pod from '../ressources/assets-home/pod.png';

const Home = () => (
  <div>
    <Title> ESPACITO</Title>
    <Cards>
      <div>
        <img src={presentationiss} alt="ISS icone" />
      </div>
      <cardTitle>
        <h2>Présentation de l&apos;ISS</h2>
      </cardTitle>
    </Cards>
    <Cards>
      <div>
        <img src={isstracker} alt="Parabol icone" />
      </div>
      <cardTitle>
        <h2>Tracker l&apos;ISS</h2>
      </cardTitle>
    </Cards>
    <Cards>
      <div>
        <img src={celestobjects} alt="Comete icone" />
      </div>
      <cardTitle>
        <h2>Les objets célestes</h2>
      </cardTitle>
    </Cards>
    <Cards>
      <div>
        <img src={pod} alt="Telescope icone" />
      </div>
      <cardTitle>
        <h2>L&apos;image du jour</h2>
      </cardTitle>
    </Cards>
  </div>
);

const Cards = styled.section`
  display: flex;
  background-color: #f2f7ff;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  width: 80%;
  margin: 2rem auto;
  padding: 5px 0;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 60%;
    margin: 1rem;
  }

  div {
    display: flex;
    justify-content: center;
    min-width: 40%;
    max-width: 40%;
    height: 100%;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

export default Home;
