import styled from 'styled-components';
import size2 from '../ressources/assets-neo/size-2m.png';
import size4 from '../ressources/assets-neo/size-4m.png';
import size15 from '../ressources/assets-neo/size-15m.png';
import size30 from '../ressources/assets-neo/size-30m.png';
import size50 from '../ressources/assets-neo/size-50m.png';
import size100 from '../ressources/assets-neo/size-100m.png';
import size200 from '../ressources/assets-neo/size-200m.png';
import size300 from '../ressources/assets-neo/size-300m.png';
import size400 from '../ressources/assets-neo/size-400m.png';
import size500 from '../ressources/assets-neo/size-500m.png';
import size650 from '../ressources/assets-neo/size-650m.png';
import size850 from '../ressources/assets-neo/size-850m.png';
import size1000 from '../ressources/assets-neo/size-1000m.png';
import size3000 from '../ressources/assets-neo/size-3000m.png';
import size5000 from '../ressources/assets-neo/size-5000m.png';
import size10000 from '../ressources/assets-neo/size-10000m.png';

const NeoCard = ({ asteroid }) => {
  const newAsteroidName = asteroid.name.replace(/[(]|[)]/g, '');
  const asteroidMaxDiameter = Math.floor(
    asteroid.estimated_diameter.meters.estimated_diameter_max,
  );
  const asteroidCompared = () => {
    let url = null;
    let description = null;
    if (asteroidMaxDiameter <= 2) {
      url = size2;
      description = 'Taille humaine';
    } else if (asteroidMaxDiameter > 2 && asteroidMaxDiameter <= 4) {
      url = size4;
      description = 'Statue Moaï de Paques';
    } else if (asteroidMaxDiameter > 4 && asteroidMaxDiameter <= 15) {
      url = size15;
      description = 'Immeuble de 4 étages';
    } else if (asteroidMaxDiameter > 15 && asteroidMaxDiameter <= 30) {
      url = size30;
      description = 'Jésus de Rio';
    } else if (asteroidMaxDiameter > 30 && asteroidMaxDiameter <= 50) {
      url = size50;
      description = 'Arc de Triomphe';
    } else if (asteroidMaxDiameter > 50 && asteroidMaxDiameter <= 100) {
      url = size100;
      description = 'Statue de la liberté';
    } else if (asteroidMaxDiameter > 100 && asteroidMaxDiameter <= 200) {
      url = size200;
      description = 'Eolienne';
    } else if (asteroidMaxDiameter > 200 && asteroidMaxDiameter <= 300) {
      url = size300;
      description = 'Tour Eiffel';
    } else if (asteroidMaxDiameter > 300 && asteroidMaxDiameter <= 400) {
      url = size400;
      description = 'Empire State Building';
    } else if (asteroidMaxDiameter > 400 && asteroidMaxDiameter <= 500) {
      url = size500;
      description = 'One World Trade Center';
    } else if (asteroidMaxDiameter > 500 && asteroidMaxDiameter <= 650) {
      url = size650;
      description = 'Shangai Tower';
    } else if (asteroidMaxDiameter > 650 && asteroidMaxDiameter <= 850) {
      url = size850;
      description = 'Tour Burj Khalifa (Dubai)';
    } else if (asteroidMaxDiameter > 850 && asteroidMaxDiameter <= 1000) {
      url = size1000;
      description = 'Kingdom Tower';
    } else if (asteroidMaxDiameter > 1000 && asteroidMaxDiameter <= 3000) {
      url = size3000;
      description = 'Mont Fuji';
    } else if (asteroidMaxDiameter > 3000 && asteroidMaxDiameter <= 5000) {
      url = size5000;
      description = 'Mont Blanc';
    } else if (asteroidMaxDiameter > 5000 && asteroidMaxDiameter <= 10000) {
      url = size10000;
      description = 'Mont Everest';
    }
    return (
      <AsteroidSizeCompare>
        <TitleH3> Taille comparative</TitleH3>
        <p>
          <b>{description}</b>
        </p>
        <AsteroidImageSizeCompare src={url} alt="" />
      </AsteroidSizeCompare>
    );
  };
  return (
    <AsteroidsCards>
      <CardContent>
        <div>
          <TitleH2>Astéroïd : {newAsteroidName}</TitleH2>
        </div>
        <AsteroidContents>
          <AsteroidInfo>
            <p>
              <b>Diamètre éstimé</b>:<br />
              entre{' '}
              <b>
                {Math.floor(
                  asteroid.estimated_diameter.meters.estimated_diameter_min,
                )}{' '}
              </b>
              et{' '}
              <b>
                {Math.floor(
                  asteroid.estimated_diameter.meters.estimated_diameter_max,
                )}{' '}
              </b>
              mètres
            </p>
            <p>
              <b>Potentiellement dagereux</b> :<br />
              {asteroid.is_potentially_hazardous_asteroid
                ? 'Dangereux'
                : 'Non dangereux'}{' '}
            </p>
            <p>
              <b>Date où il sera le plus proche de la terre</b> :<br />
              {asteroid.close_approach_data[0].close_approach_date}
            </p>
            <p>
              <b>Distance la plus proche de la terre</b> :<br />
              {Math.floor(
                asteroid.close_approach_data[0].miss_distance.kilometers,
              )}{' '}
              kilomètres.
            </p>
          </AsteroidInfo>
          {asteroidCompared()}
        </AsteroidContents>
      </CardContent>
    </AsteroidsCards>
  );
};

const AsteroidsCards = styled.div`
  @media (min-width: 768px) {
    width: 45%;
  }
`;

const TitleH2 = styled.h2`
  text-align: center;
`;

const TitleH3 = styled.h3`
  text-align: center;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c8ced6;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  margin: 1rem 1em;
  padding: 2rem;

  @media (min-width: 768px) {
    margin: 2rem;
    padding: 1rem 4rem;
  }
`;

const AsteroidContents = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const AsteroidInfo = styled.div`
  display: flex;
  flex-direction: column;

  @media (min-width: 768px) {
    align-items: flex-start;
    min-width: 40%;
    margin-right: 5rem;
  }
`;

const AsteroidSizeCompare = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 60%;

  @media (min-width: 768px) {
    align-items: center;
    width: 40%;
  }
`;

const AsteroidImageSizeCompare = styled.img`
  width: 80%;
`;

export default NeoCard;
