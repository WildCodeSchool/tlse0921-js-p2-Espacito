import React from 'react';
import styled from 'styled-components';

function VideoIss() {
  return (
    <div>
      <DirectVideo
        width="600"
        height="337"
        src="https://www.youtube.com/embed/DDU-rZs-Ic4"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}

const DirectVideo = styled.iframe`
  max-width: 90%;
`;

export default VideoIss;
