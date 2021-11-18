import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Footer = () => (
  <FooterContainer>
    <FooterRow>
      <FirstRow>
        <a
          href="https://shielded-earth-94641.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Le système solaire</h3>
        </a>
        <Link to="/flappiss">
          <h3>Espace Ludique</h3>
        </Link>
      </FirstRow>
      <SecondRow>
        <img src="ressources/logo512.png" alt="Logo Espacito" />
      </SecondRow>
      <ThirdRow>
        <LogoRs
          href="https://www.facebook.com/ISS"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="ressources/assets-footer/facebook.png"
            alt="Logo Facebook"
          />
        </LogoRs>
        <LogoRs
          href="https://twitter.com/Space_Station"
          target="_blank"
          rel="noreferrer"
        >
          <img src="ressources/assets-footer/twitter.png" alt="Logo Twitter" />
        </LogoRs>
        <LogoRs
          href="https://www.linkedin.com/in/thomas-pesquet/"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="ressources/assets-footer/linkedin.png"
            alt="Logo LinkedIn"
          />
        </LogoRs>
        <LogoRs
          href="https://www.instagram.com/iss"
          target="_blank"
          rel="noreferrer"
        >
          <img
            src="ressources/assets-footer/instagram.png"
            alt="Logo Instagram"
          />
        </LogoRs>
      </ThirdRow>
    </FooterRow>
    <Credits>
      <p>
        ©2021 Espacito -{' '}
        <a
          href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228"
          target="_blank"
          rel="noreferrer"
        >
          Mentions légales
        </a>{' '}
        -{' '}
        <a
          href="https://www.francenum.gouv.fr/comprendre-le-numerique/rediger-des-conditions-generales-dutilisation-cgu-pour-son-site-internet"
          target="_blank"
          rel="noreferrer"
        >
          Conditions générales d&apos;utilisation
        </a>
      </p>
    </Credits>
  </FooterContainer>
);

const FooterContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  background: #041844ff;

  a,
  p,
  h3 {
    text-decoration: none;
    color: white;
  }

  h3 {
    margin: 0;
    font-size: 1.5rem;
    text-align: center;
  }

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 0;
  }
`;

const FooterRow = styled.div`
  margin: 2rem auto;

  @media (min-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 70%;
  }
`;

const FirstRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    align-items: flex-start;
    width: 30%;
  }
`;

const SecondRow = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 2rem auto;
    width: 25%;

    img {
      max-width: 71%;
    }
  }
`;

const ThirdRow = styled.div`
  display: flex;
  width: 80%;
  margin: auto;

  @media (min-width: 768px) {
    flex-flow: row;
    align-items: center;
    width: 30%;
  }
`;

const LogoRs = styled.a`
  display: flex;
  justify-content: center;
  margin: 2rem auto;

  img {
    width: 40%;
  }

  @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: center;
  }
`;

const Credits = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default Footer;
