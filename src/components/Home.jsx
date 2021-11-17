import styled from 'styled-components';
import { Link } from 'react-router-dom';
import presentationiss from '../ressources/assets-home/presentation-iss.png';
import isstracker from '../ressources/assets-home/iss-tracker.png';
import celestobjects from '../ressources/assets-home/celest-objects.png';
import podIcone from '../ressources/assets-home/podIcone.png';

const Home = () => (
  <div>
    <Title> ESPACITO, à la découverte de l&apos;espace !</Title>
    <CardsContainer>
      <Link to="/iss-presentation">
        <NavCard>
          <Cards>
            <CardImgContainer>
              <img src={presentationiss} alt="ISS icone" />
            </CardImgContainer>
            <cardTitle>
              <h2>Présentation de l&apos;ISS</h2>
            </cardTitle>
          </Cards>
        </NavCard>
      </Link>
      <Link to="/iss-tracker">
        <NavCard>
          <Cards>
            <CardImgContainer>
              <img src={isstracker} alt="Parabol icone" />
            </CardImgContainer>
            <cardTitle>
              <h2>Tracker l&apos;ISS</h2>
            </cardTitle>
          </Cards>
        </NavCard>
      </Link>
      <Link to="/celest-objects">
        <NavCard>
          <Cards>
            <CardImgContainer>
              <img src={celestobjects} alt="Comete icone" />
            </CardImgContainer>
            <cardTitle>
              <h2>Les objets célestes</h2>
            </cardTitle>
          </Cards>
        </NavCard>
      </Link>
      <Link to="/picture-of-the-day">
        <NavCard>
          <Cards>
            <CardImgContainer>
              <img src={podIcone} alt="Telescope icone" />
            </CardImgContainer>
            <cardTitle>
              <h2>L&apos;image du jour</h2>
            </cardTitle>
          </Cards>
        </NavCard>
      </Link>
    </CardsContainer>
  </div>
);

const CardsContainer = styled.section`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    flex-flow: row wrap;
    width: 90%;
    margin: 5rem auto;
    justify-content: center;
    gap: 4rem;
  }
`;

const Cards = styled.div`
  display: flex;
  background-color: #c8ced6;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  width: 90%;
  margin: 1rem auto;
  padding: 5px 0;
  justify-content: flex-start;
  align-items: center;

  img {
    width: 60%;
    margin: 1rem;
  }

  /* div {
    display: flex;
    justify-content: center;
    min-width: 40%;
    max-width: 40%;
    height: 100%;
  } */

  @media (min-width: 768px) {
    margin: 0;
    width: 90%;
    flex-direction: column;
  }
`;

const CardImgContainer = styled.div`
  display: flex;
  justify-content: center;
  min-width: 40%;
  max-width: 40%;
  height: 100%;
`;

const Title = styled.h1`
  text-align: center;
  margin: 4rem 0;
`;

const NavCard = styled.a`
  text-decoration: none;
  color: black;
`;

export default Home;
