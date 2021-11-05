import styled from 'styled-components';

const NeoCard = ({ asteroid }) => (
  <div>
    <CardContent>
      <p>nom: {asteroid.name}</p>
      <p>
        Diamètre éstimé : entre{' '}
        {Math.floor(asteroid.estimated_diameter.meters.estimated_diameter_min)}{' '}
        et{' '}
        {Math.floor(asteroid.estimated_diameter.meters.estimated_diameter_max)}{' '}
        mètres
      </p>
      <p>
        Potentiellement dagereux :{' '}
        {asteroid.is_potentially_hazardous_asteroid
          ? 'Dangereux'
          : 'Non dangereux'}{' '}
      </p>
      <p>
        Date où il sera le plus proche de la terre:{' '}
        {asteroid.close_approach_data[0].close_approach_date}
      </p>
      <p>
        Distance la plus proche de la terre{' '}
        {Math.floor(asteroid.close_approach_data[0].miss_distance.kilometers)}{' '}
        kilomètres.
      </p>
    </CardContent>
  </div>
);

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #c8ced6;
  border: solid black;
  border-width: 3px 4px 3px 5px;
  border-radius: 95% 4% 92% 5%/4% 95% 6% 95%;
  width: 45%;
  margin: 1rem auto;
  padding: 2rem 0;
  align-items: flex-start;
`;

export default NeoCard;
