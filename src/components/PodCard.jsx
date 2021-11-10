import styled from 'styled-components';

const PodCardStyle = styled.div`
  width: 980px;
  margin: 0 auto;
  font-family: Verdana, Tahoma, sans-serif;
  text-align: center;
`;

const TitlePodCardStyle = styled.h1`
  text-align: center;
`;

const TitlePodStyle = styled.h2`
  text-align: center;
`;
const ParagrapheLeft = styled.p`
  text-align: left;
`;

const PodCard = ({ pod }) => (
  <PodCardStyle>
    <TitlePodCardStyle>
      Chaque jour découvrez une image du ciel
    </TitlePodCardStyle>
    <TitlePodStyle>{pod.title}</TitlePodStyle>
    <p>{pod.date}</p>
    {pod.media_type === 'image' ? (
      <img src={pod.image} alt={pod.title} className="photo" />
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
    <p>{pod.copyright}</p>
    <ParagrapheLeft> {pod.explanation}</ParagrapheLeft>
  </PodCardStyle>
);

export default PodCard;
