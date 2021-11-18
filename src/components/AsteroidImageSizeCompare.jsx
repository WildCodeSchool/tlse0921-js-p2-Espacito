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

const AsteroidImageSizeCompare = ({ asteroid }) => {
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
        <ComparedImage src={url} alt={description} />
      </AsteroidSizeCompare>
    );
  };
  return asteroidCompared();
};

const TitleH3 = styled.h3`
  text-align: center;
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

const ComparedImage = styled.img`
  width: 80%;
`;

export default AsteroidImageSizeCompare;
