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
              <span className="strong">Diamètre estimé</span>:<br />
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
              <span className="strong">Potentiellement dangereux</span> :<br />
              {asteroid.is_potentially_hazardous_asteroid
                ? 'Dangereux'
                : 'Non dangereux'}{' '}
            </p>
            <p>
              <span className="strong">
                Date où il sera le plus proche de la terre
              </span>{' '}
              :<br />
              {asteroid.close_approach_data[0].close_approach_date
                .split('-')
                .reverse()
                .join('-')}
            </p>
            <p>
              <span className="strong">
                Distance la plus proche de la terre
              </span>{' '}
              :<br />
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
  border: 4px solid black;
  border-radius: 51px;
  margin: 1rem 1em;
  padding: 2rem;

  .strong {
    font-size: 18px;
    font-weight: 900;
    text-decoration: underline;
  }

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
