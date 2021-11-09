const NeoCard = ({ asteroid }) => (
  <div>
    <p>nom: {asteroid.name}</p>
    <p>id : {asteroid.id}</p>
    <p>
      Diamètre éstimé : entre{' '}
      {Math.floor(asteroid.estimated_diameter.meters.estimated_diameter_min)} et{' '}
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
  </div>
);

export default NeoCard;
