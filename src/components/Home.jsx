import styled from 'styled-components';
import presentationiss from '../ressources/assets-home/presentation-iss.png';
import isstracker from '../ressources/assets-home/iss-tracker.png';
import celestobjects from '../ressources/assets-home/celest-objects.png';
import pod from '../ressources/assets-home/pod.png';

const Home = () => (
  <div>
    <h1> ESPACITO</h1>
    <Cards>
      <cardImage>
        <img src={presentationiss} alt="ISS icone" />
      </cardImage>
      <cardTitle>
        <h2>Présentation de l&apos;ISS</h2>
      </cardTitle>
    </Cards>
    <Cards>
      <cardImage>
        <img src={isstracker} alt="ISS icone" />
      </cardImage>
      <cardTitle>
        <h2>ISS Tracker</h2>
      </cardTitle>
    </Cards>
    <Cards>
      <cardImage>
        <img src={celestobjects} alt="ISS icone" />
      </cardImage>
      <cardTitle>
        <h2>Les objets célestes</h2>
      </cardTitle>
    </Cards>
    <Cards>
      <cardImage>
        <img src={pod} alt="ISS icone" />
      </cardImage>
      <cardTitle>
        <h2>L&apos;image du jour</h2>
      </cardTitle>
    </Cards>
  </div>
);

const Cards = styled.div`
  display: flex;
  background-color: #e5ebf7;
  border: solid 1px black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  width: 70%;
  margin: 2rem auto;
  padding: 5px 2rem;
  justify-content: center;
  align-items: center;

  img {
    width: 50%;
    margin: 1rem;
  }

  &--cardImage {
    display: flex;
    justify-content: center;
    width: 30% !important;
  }

  &--cardTitle {
    display: flex;
    padding-right: 1rem;
    margin-bottom: 2rem;
  }
`;

export default Home;
