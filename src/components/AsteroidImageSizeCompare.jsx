import styled from 'styled-components';

const AsteroidImageSizeCompare = ({ asteroid }) => {
  const asteroidMaxDiameter = Math.floor(
    asteroid.estimated_diameter.meters.estimated_diameter_max,
  );
  const asteroidCompared = () => {
    let url = null;
    let description = null;
    if (asteroidMaxDiameter <= 2) {
      url = 'ressources/assets-neo/size-2m.png';
      description = 'Taille humaine';
    } else if (asteroidMaxDiameter > 2 && asteroidMaxDiameter <= 4) {
      url = 'ressources/assets-neo/size-4m.png';
      description = 'Statue Moaï de Paques';
    } else if (asteroidMaxDiameter > 4 && asteroidMaxDiameter <= 15) {
      url = 'ressources/assets-neo/size-15m.png';
      description = 'Immeuble de 4 étages';
    } else if (asteroidMaxDiameter > 15 && asteroidMaxDiameter <= 30) {
      url = 'ressources/assets-neo/size-30m.png';
      description = 'Jésus de Rio';
    } else if (asteroidMaxDiameter > 30 && asteroidMaxDiameter <= 50) {
      url = 'ressources/assets-neo/size-50m.png';
      description = 'Arc de Triomphe';
    } else if (asteroidMaxDiameter > 50 && asteroidMaxDiameter <= 100) {
      url = 'ressources/assets-neo/size-100m.png';
      description = 'Statue de la liberté';
    } else if (asteroidMaxDiameter > 100 && asteroidMaxDiameter <= 200) {
      url = 'ressources/assets-neo/size-200m.png';
      description = 'Eolienne';
    } else if (asteroidMaxDiameter > 200 && asteroidMaxDiameter <= 300) {
      url = 'ressources/assets-neo/size-300m.png';
      description = 'Tour Eiffel';
    } else if (asteroidMaxDiameter > 300 && asteroidMaxDiameter <= 400) {
      url = 'ressources/assets-neo/size-400m.png';
      description = 'Empire State Building';
    } else if (asteroidMaxDiameter > 400 && asteroidMaxDiameter <= 500) {
      url = 'ressources/assets-neo/size-500m.png';
      description = 'One World Trade Center';
    } else if (asteroidMaxDiameter > 500 && asteroidMaxDiameter <= 650) {
      url = 'ressources/assets-neo/size-650m.png';
      description = 'Shangai Tower';
    } else if (asteroidMaxDiameter > 650 && asteroidMaxDiameter <= 850) {
      url = 'ressources/assets-neo/size-850m.png';
      description = 'Tour Burj Khalifa (Dubai)';
    } else if (asteroidMaxDiameter > 850 && asteroidMaxDiameter <= 1000) {
      url = 'ressources/assets-neo/size-1000m.png';
      description = 'Kingdom Tower';
    } else if (asteroidMaxDiameter > 1000 && asteroidMaxDiameter <= 3000) {
      url = 'ressources/assets-neo/size-3000m.png';
      description = 'Mont Fuji';
    } else if (asteroidMaxDiameter > 3000 && asteroidMaxDiameter <= 5000) {
      url = 'ressources/assets-neo/size-5000m.png';
      description = 'Mont Blanc';
    } else if (asteroidMaxDiameter > 5000 && asteroidMaxDiameter <= 10000) {
      url = 'ressources/assets-neo/size-10000m.png';
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
