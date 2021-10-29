import { BrowserRouter as Link } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
import logo from '../ressources/logo512.png';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Nav>
      <Link to="/">
      <Logo>
        <img src={logo} alt="Logo Espacito" />
      </Logo>
      </Link>
      <Burger onClick={() => setIsOpen(!isOpen)}>
        <span />
        <span />
        <span />
      </Burger>
      <Menu isOpen={isOpen}>
        <Link to="/presentationiss"><MenuLink>Présentation de l&apos;ISS</MenuLink></Link>
        <Link to="/isstracker"><MenuLink>Tracker l&apos;ISS</MenuLink></Link>
        <Link to="/objetscelestes"><MenuLink>Objets Célestes</MenuLink></Link>
        <Link to="photodujour"><MenuLink>Photo du jour</MenuLink></Link>
      </Menu>
    </Nav>
  );
};

const Nav = styled.div`
  padding: 0 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  background: #041844ff;

  @media (max-width: 768px) {
    display: flex;
  }
`;

const Burger = styled.div`
  display: none;
  flex-direction: column;
  cursor: pointer;

  span {
    height: 2px;
    width: 25px;
    background: white;
    margin-bottom: 4px;
    border-radius: 5px;
  }

  @media (max-width: 1271px) {
    display: flex;
  }
`;

const MenuLink = styled.div`
  padding: 1rem 2rem;
  cursor: pointer;
  text-align: center;
  text-decoration: none;
  color: white;
  transition: all 0.3 ease-in;
  font-size: 1.5rem;

  &:hover {
    color: #7b7fda;
  }
`;

const Menu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  @media (max-width: 1271px) {
    overflow: hidden;
    flex-direction: column;
    width: 100%;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: 0.3s ease-in;
  }
`;

const Logo = styled.a`
  width: 25%;

  img {
    width: 250px;
  }
`;

export default Navigation;
