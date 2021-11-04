import styled from 'styled-components';

const PodCardStyle = styled.div`
  width: 980px;
  margin: 0 auto;
  font-family: Verdana, Tahoma, sans-serif;
  text-align: center;
`;

const TitlePodStyle = styled.h2`
  text-align: center;
`;
const ParagrapheLeft = styled.p`
  text-align: left;
`;

const SearchDate = ({ filterDate }) => (
  <PodCardStyle>
    <TitlePodStyle>{filterDate.title}</TitlePodStyle>
    <p>{filterDate.date}</p>
    {filterDate.media_type === 'image' ? (
      <img src={filterDate.image} alt={filterDate.title} className="photo" />
    ) : (
      <iframe
        title="space-video"
        src={filterDate.image}
        frameBorder="0"
        gesture="media"
        allow="encrypted-media"
        allowFullScreen
        className="photo"
      />
    )}
    <p>{filterDate.copyright}</p>
    <ParagrapheLeft>{filterDate.explanation}</ParagrapheLeft>
  </PodCardStyle>
);

export default SearchDate;