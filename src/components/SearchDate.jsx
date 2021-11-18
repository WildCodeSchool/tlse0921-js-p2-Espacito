import styled from 'styled-components';

const PodCardStyle = styled.div`
  width: 100%;
  margin: 0 auto;
  font-family: Verdana, Tahoma, sans-serif;
  text-align: center;
`;
const Paragraphe = styled.p`
  color: #fff;
`;
const PodRowGlobal = styled.div`
  background-color: #041844ff;
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  padding: 1em;
  margin-bottom: 6em;

  @media (max-width: 1066px) {
    flex-direction: column;
    padding: 0;
  }
`;

const PodRow = styled.div`
  width: 47%;
  padding: 1em;
  margin-top: 4em;
  margin-bottom: 4em;

  @media (max-width: 1066px) {
    flex-direction: column;
    width: 90%;
    margin: 0 auto;
  }
`;

const TitlePodStyle = styled.h2`
  text-align: center;
  color: #fff;
`;
const ParagrapheLeft = styled.p`
  color: #fff;
  width: 80%;
  text-align: justify;
  margin: 0 auto;

  @media (max-width: 1066px) {
    margin-bottom: 2em !important;
    width: 100%;
  }
`;
const Image = styled.img`
  max-width: 100%;
  border: 8px solid #fff;

  @media (max-width: 1024px) {
    margin-top: 2em;
  }

  @media (max-width: 600px) {
    border: 0;
  }
`;

const SearchDate = ({ filterDate }) => (
  <PodCardStyle>
    <PodRowGlobal>
      <PodRow>
        {filterDate.media_type === 'image' ? (
          <Image
            src={filterDate.image}
            alt={filterDate.title}
            className="photo"
          />
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
      </PodRow>
      <PodRow>
        <TitlePodStyle>{filterDate.title}</TitlePodStyle>
        <Paragraphe>{filterDate.date}</Paragraphe>
        <Paragraphe>{filterDate.copyright}</Paragraphe>
        <ParagrapheLeft>{filterDate.explanation}</ParagrapheLeft>
      </PodRow>
    </PodRowGlobal>
  </PodCardStyle>
);

export default SearchDate;
