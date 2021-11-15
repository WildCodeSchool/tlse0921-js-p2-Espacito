import styled from 'styled-components';

const PodCardStyle = styled.div`
  width: 90%;
  flex-wrap: wrap;
  display: flex;
  margin: 0 auto;
  font-family: Verdana, Tahoma, sans-serif;
  text-align: center;
`;

const PodRowLeft = styled.div`
  width: 48%;
`;

const PodRowRight = styled.div`
  width: 48%;
  padding: 1em;
`;

const TitlePodCardStyle = styled.h1`
  text-align: center;
  display: block !important;
  margin: 0 auto;
  padding: 2em;
`;

const TitlePodStyle = styled.h2`
  text-align: center;
`;
const ParagrapheLeft = styled.p`
  text-align: left;
`;
const Image = styled.img`
  max-width: 100%;
  border-radius: 30px;
`;

const PodCard = ({ pod }) => (
  <PodCardStyle>
    <TitlePodCardStyle>
      Chaque jour découvrez une image du ciel
    </TitlePodCardStyle>
    <PodRowLeft>
      {pod.media_type === 'image' ? (
        <Image src={pod.image} alt={pod.title} className="photo" />
      ) : (
        <iframe
          title="space-video"
          src={pod.image}
          frameBorder="0"
          gesture="media"
          allow="encrypted-media"
          allowFullScreen
          className="photo"
        />
      )}
    </PodRowLeft>
    <PodRowRight>
      <TitlePodStyle>{pod.title}</TitlePodStyle>
      <p>{pod.date}</p>

      <p>{pod.copyright}</p>
      <ParagrapheLeft> {pod.explanation}</ParagrapheLeft>
    </PodRowRight>
  </PodCardStyle>
);

export default PodCard;
