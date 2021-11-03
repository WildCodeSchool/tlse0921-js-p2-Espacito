const NeoCard = ({ asteroids }) => {
  <div>
    <p>count: {asteroids.element_count}</p>
    <p>name: {asteroids.name}</p>
    <p>neo id: {asteroids.id}</p>
    <p>
      is_potentially_hazardous_asteroid:{' '}
      {asteroids.is_potentially_hazardous_asteroid}
    </p>
    <p>close_approach_date_full: {asteroids.close_approach_date_full}</p>
  </div>;
};

export default NeoCard;
