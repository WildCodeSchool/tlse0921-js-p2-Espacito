const NeoCard = ({
  element_count: element,
  name,
  id,
  is_potentially_hazardous_asteroid: dangerous,
  close_approach_date_full: date,
}) => (
  <div>
    <p>count: {element}</p>
    <p>name: {name}</p>
    <p>neo id: {id}</p>
    <p>
      is_potentially_hazardous_asteroid:
      {dangerous}
    </p>
    <p>close_approach_date_full: {date}</p>
  </div>
);

export default NeoCard;
