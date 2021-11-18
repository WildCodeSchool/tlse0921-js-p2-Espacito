import styled from 'styled-components';
import Astronauts from './Astronauts';

const Hero = styled.div`
  display: flex;
  position: relative;
  top: -1px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding: 2rem;

  h1 {
    color: white;
  }

  p {
    color: white;
  }

  @media (min-width: 768px) {
    p {
      width: 50%;
    }
  }
`;

const HeroHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
  }
`;

const HeroVideo = styled.video`
  position: absolute;
  width: 100%;
  left: 50%;
  top: 50%;
  height: 100%;
  object-fit: cover;
  transform: translate(-50%, -50%);
  z-index: -1;
`;

const IssContainer = styled.div`
  width: 100%;
  list-style: none;
  margin: 3rem auto 4rem;

  li {
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  img {
    width: 50px;
    margin-bottom: 1em;
  }

  ul {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 768px) {
    width: 65%;

    p {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      grid-gap: 1rem;
    }
  }
`;

const IssVideoContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 95%;
  margin: 2rem auto;

  iframe {
    width: 100%;
    height: 350px;
  }

  @media (min-width: 768px) {
    iframe {
      width: 60%;
      height: 500px;
    }
  }
`;

const PresentationIss = () => (
  <div>
    <Hero>
      <HeroHeader>
        <HeroVideo autoPlay muted loop>
          <source src="ressources/assets-iss/videoIss.mp4" type="video/mp4" />
        </HeroVideo>
        <div>
          <img src="ressources/assets-home/presentation-iss.png" alt="Logo" />
        </div>
        <div>
          <h1>Qu&apos;est-ce que l&apos;ISS ?</h1>
        </div>
      </HeroHeader>
      <p>
        La Station spatiale internationale, en abrégé SSI ou ISS, est une
        station spatiale placée en orbite terrestre basse, occupée en permanence
        par un équipage international qui se consacre à la recherche
        scientifique dans l&apos;environnement spatial.
      </p>
    </Hero>
    <IssContainer>
      <ul>
        <li>
          <img src="ressources/assets-iss/earth.png" alt="Earth" />
          L’ISS fait le tour de la Terre en 90 minutes, soit 16 fois par jour.
          Un astronaute à bord de l’ISS peut donc voir autant de couchers et de
          levers de soleil au quotidien.
        </li>
        <li>
          <img src="ressources/assets-iss/bulb.png" alt="Bulb" />
          27 600 km/h, c’est la vitesse de déplacement de l’ISS. Un appareil
          propulsé à cette vitesse sur Terre permettrait de relier Paris à New
          York en moins de 15 minutes ! L’ISS est en chute libre permanente !
        </li>
        <li>
          <img src="ressources/assets-iss/aquarium.png" alt="Aquarium" />
          L’ISS dispose d’une serre et d’un aquarium ! Depuis 2002, des plantes
          et des légumes sont cultivés dans la partie russe de l’ISS.
        </li>
        <li>
          <img src="ressources/assets-iss/law.png" alt="Law" />
          Quelle loi à bord de l’ISS ? Le traité stipule que la loi des pays
          signataires s’applique dans les modules qu’ils ont financés au sein de
          la station.
        </li>
      </ul>
    </IssContainer>
    <Astronauts />
    <IssVideoContainer>
      <h2>VISITE DE L&apos;ISS AVEC THOMAS PESQUET</h2>
      <iframe
        src="https://www.youtube.com/embed/zMt-R898l94"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </IssVideoContainer>
  </div>
);

export default PresentationIss;
