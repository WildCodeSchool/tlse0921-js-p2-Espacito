import styled from 'styled-components';

const IssPicture = ({ birdBottom, birdLeft }) => (
  <div>
    <IssPic left={birdLeft} bottom={birdBottom} />
  </div>
);

const IssPic = styled.div`
  position: absolute;
  background-color: blue;
  width: 50px;
  height: 60px;
  left: ${(left) => left};
  bottom: ${(bottom) => bottom};
`;

export default IssPicture;
