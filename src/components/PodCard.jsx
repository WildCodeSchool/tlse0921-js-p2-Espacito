const PodCard = ({ pod }) => (
  <div className="PodCard">
    <h1>{pod.title}</h1>
    <p>{pod.date}</p>
    <img src={pod.image} alt={pod.title} />
    <p>{pod.copyright}</p>
    <p>{pod.explanation}</p>
  </div>
);

export default PodCard;
