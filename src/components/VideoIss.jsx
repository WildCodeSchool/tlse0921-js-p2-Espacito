import React from 'react';
import styled from 'styled-components';

function VideoIss() {
  return (
    <VideoCard>
      <Title>L&apos;ISS en direct</Title>
      <DirectVideo
        width="900"
        height="460"
        src="https://www.youtube.com/embed/DDU-rZs-Ic4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </VideoCard>
  );
}
const VideoCard = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 0 auto;
`;
const Title = styled.h2`
  color: #041844;
  margin: 0 auto;
  text-align: center;
  padding: 1em;
`;
const DirectVideo = styled.iframe`
  max-width: 95%;
  margin: 0 auto;
  border-radius: 51px;
`;

export default VideoIss;
