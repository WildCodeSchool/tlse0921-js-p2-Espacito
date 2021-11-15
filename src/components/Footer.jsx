import styled from 'styled-components';
import { Link } from 'react-router-dom';
import logo from '../ressources/logo512.png';
import facebook from '../ressources/assets-footer/facebook.png';
import twitter from '../ressources/assets-footer/twitter.png';
import linkedin from '../ressources/assets-footer/linkedin.png';
import instagram from '../ressources/assets-footer/instagram.png';

const Footer = () => (
  <FooterContainer>
    <FooterRow>
      <FirstRow>
        <Link to="/ressources">
          <h3>Ressources</h3>
        </Link>
        <Link to="/team">
          <h3>Team</h3>
        </Link>
        <a
          href="https://shielded-earth-94641.herokuapp.com/"
          target="_blank"
          rel="noreferrer"
        >
          <h3>Le système solaire</h3>
        </a>
      </FirstRow>
      <SecondRow>
        <img src={logo} alt="Logo Espacito" />
      </SecondRow>
      <ThirdRow>
        <LogoRs href="https://www.facebook.com/ISS">
          <img src={facebook} alt="Logo Facebook" />
        </LogoRs>
        <LogoRs href="https://twitter.com/Space_Station">
          <img src={twitter} alt="Logo Twitter" />
        </LogoRs>
        <LogoRs href="https://www.linkedin.com/in/thomas-pesquet/">
          <img src={linkedin} alt="Logo LinkedIn" />
        </LogoRs>
        <LogoRs href="https://www.instagram.com/iss">
          <img src={instagram} alt="Logo Instagram" />
        </LogoRs>
      </ThirdRow>
    </FooterRow>
    <Credits>
      <p>
        ©2021 Espacito -{' '}
        <a href="https://www.service-public.fr/professionnels-entreprises/vosdroits/F31228">
          Mentions légales
        </a>{' '}
        -{' '}
        <a href="https://www.francenum.gouv.fr/comprendre-le-numerique/rediger-des-conditions-generales-dutilisation-cgu-pour-son-site-internet">
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
    font-size: 2rem;
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

  &:hover {
    color: #7b7fda;
  }

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

  @media (min-width: 768px) {
    flex-direction: column;
    justify-content: center;
    width: 30%;
  }
`;

const SecondRow = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem auto;

  img {
    width: 40%;
  }

  @media (min-width: 768px) {
    width: 30%;

    img {
      width: 60%;
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

    img {
      width: 40%;
    }
  }
`;

const Credits = styled.div`
  display: flex;
  justify-content: center;
  text-align: center;
`;

export default Footer;
