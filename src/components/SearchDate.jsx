const SearchDate = ({ filterDate }) => (
  <div className="pod_card">
    <h2>{filterDate.title}</h2>
    <p>{filterDate.date}</p>
    <img src={filterDate.image} alt={filterDate.title} />
    <p>{filterDate.copyright}</p>
    <p>{filterDate.explanation}</p>
  </div>
);

export default SearchDate;
