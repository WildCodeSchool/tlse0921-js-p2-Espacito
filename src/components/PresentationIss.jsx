import styled from 'styled-components';
import presentationiss from '../ressources/assets-home/presentation-iss.png';

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 75vh;
  background-size: cover;
  background-image: url('https://images.pexels.com/photos/23764/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260');

  h1 {
    color: white;
  }

  p {
    color: white;
    text-align: center;
  }
`;

const HeroTitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const Text = styled.p`
  text-align: center;
`;

const PresentationIss = () => (
  <div>
    <Hero>
      <HeroTitle>
        <div>
          <img src={presentationiss} alt="Logo" />
        </div>
        <div>
          <h1>Présentation de ISS</h1>
        </div>
      </HeroTitle>
      <p>
        The International Space Station is a large spacecraft in orbit around
        Earth. It serves as a home where crews of astronauts and cosmonauts
        live. The space station is also a unique science laboratory. Several
        nations worked together to build and use the space station. The space
        station is made of parts that were assembled in space by astronauts. It
        orbits Earth at an average altitude of approximately 250 miles. It
        travels at 17,500 mph. This means it orbits Earth every 90 minutes. NASA
        is using the space station to learn more about living and working in
        space. These lessons will make it possible to send humans farther into
        space than ever before.
      </p>
    </Hero>
    <Container>
      <div>
        <h2>Configuration de l`ISS</h2>
        <Text>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur
          voluptatibus id, in et neque nisi sapiente aperiam eum vitae quidem
          nihil, magnam non necessitatibus totam adipisci. Ea omnis suscipit
          voluptas?
        </Text>
      </div>
    </Container>
  </div>
);
export default PresentationIss;
