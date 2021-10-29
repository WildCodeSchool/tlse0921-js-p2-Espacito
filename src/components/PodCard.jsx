import styled from 'styled-components';

const PodCardStyle = styled.div`
  width: 980px;
  margin: 0 auto;
  font-family: Verdana, Tahoma, sans-serif;
`;

const TitlePodCardStyle = styled.h1`
  text-align: center;
`;

const TitlePodStyle = styled.h2`
  text-align: center;
`;

const PodCard = ({ pod }) => (
  <PodCardStyle>
    <TitlePodCardStyle>
      Chaque jour découvrez une image du ciel
    </TitlePodCardStyle>
    <TitlePodStyle>{pod.title}</TitlePodStyle>
    <p>{pod.date}</p>
    <img src={pod.image} alt={pod.title} />
    <p>{pod.copyright}</p>
    <p>{pod.explanation}</p>
  </PodCardStyle>
);

export default PodCard;
