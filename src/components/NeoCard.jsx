import styled from 'styled-components';
import AsteroidImageSizeCompare from './AsteroidImageSizeCompare';

const NeoCard = ({ asteroid }) => {
  const newAsteroidName = asteroid.name.replace(/[(]|[)]/g, '');

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
          <AsteroidImageSizeCompare asteroid={asteroid} />
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

export default NeoCard;
