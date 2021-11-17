import styled from 'styled-components';
import presentationiss from '../ressources/assets-home/presentation-iss.png';
import videoIss from '../ressources/videoIss.mp4';
import earth from '../ressources/assets-home/earth.png';
import law from '../ressources/assets-home/law.png';
import aquarium from '../ressources/assets-home/aquarium.png';
import bulb from '../ressources/assets-home/bulb.png';

const Hero = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  h1 {
    color: white;
  }

  p {
    color: white;
    text-align: center;
    width: 65%;
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
  width: 65%;
  list-style: none;
  margin: 0 auto;

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
  }

  p {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 1rem;
  }
`;

const IssVideoContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  overflow: hidden;
  width: 65%;
  margin: 0 auto;
`;

const PresentationIss = () => (
  <div>
    <Hero>
      <HeroHeader>
        <HeroVideo autoPlay muted loop>
          <source src={videoIss} type="video/mp4" />
        </HeroVideo>
        <div>
          <img src={presentationiss} alt="Logo" />
        </div>
        <div>
          <h1>Présentation de ISS</h1>
        </div>
      </HeroHeader>
      <p>
        The International Space Station is a large spacecraft in orbit around
        Earth. It serves as a home where crews of astronauts and cosmonauts
        live. The space station is also a unique science laboratory. Several
        nations worked together to build and use the space station. The space
        station is made of parts that were assembled in space by astronauts. It
        orbits Earth at an average altitude of approximately 250 miles. It
        travels at 17,500 mph. This means it orbits Earth every 90 minutes. NASA
        is using the space station to learn more about living and working in
        space. These lessons will make it possible to send humans farther into
        space than ever before.
      </p>
    </Hero>
    <IssContainer>
      <p>
        <li>
          <img src={earth} alt="Earth" />
          L’ISS fait le tour de la Terre en 90 minutes, soit 16 fois par jour.
          Un astronaute à bord de l’ISS peut donc voir autant de couchers et de
          levers de soleil au quotidien.
        </li>
        <li>
          <img src={bulb} alt="Bulb" />
          27 600 km/h, c’est la vitesse de déplacement de l’ISS. Un appareil
          propulsé à cette vitesse sur Terre permettrait de relier Paris à New
          York en moins de 15 minutes ! L’ISS est en chute libre permanente !
        </li>
        <li>
          <img src={aquarium} alt="Aquarium" />
          L’ISS dispose d’une serre et d’un aquarium ! Depuis 2002, des plantes
          et des légumes sont cultivés dans la partie russe de l’ISS.
        </li>
        <li>
          <img src={law} alt="Law" />
          Quelle loi à bord de l’ISS ? Le traité stipule que la loi des pays
          signataires s’applique dans les modules qu’ils ont financés au sein de
          la station.
        </li>
      </p>
    </IssContainer>
    <IssVideoContainer>
      <div>
        <iframe
          width="480"
          height="318"
          src="https://www.youtube.com/embed/zMt-R898l94"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div>
        <iframe
          width="480"
          height="318"
          src="https://www.youtube.com/embed/X4VfoOftKtc"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </IssVideoContainer>
  </div>
);
export default PresentationIss;
