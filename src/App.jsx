import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PresentationIss from './components/PresentationIss';
import IssTracker from './components/IssTracker';
import CelestObjects from './components/CelestObjects';
import Pod from './components/Pod';
import Footer from './components/Footer';
import Ressources from './components/Ressources';

function App() {
  return (
    <div>
      <GlobalStyle />
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/presentationiss">
            <PresentationIss />
          </Route>
          <Route path="/isstracker">
            <IssTracker />
          </Route>
          <Route path="/objetscelestes">
            <CelestObjects />
          </Route>
          <Route path="/photodujour">
            <Pod />
          </Route>
          <Route path="/ressources">
            <Ressources />
          </Route>
        </Switch>
        <div>
          <Footer />
        </div>
      </Router>
    </div>
  );
}

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }

  h1 {
    color: #041844ff;
    font-family: 'Bungee', cursive;
  }

  h2, h3 {
    color: #041844ff;
    font-family: 'Audiowide', cursive;
  }

  p {
    font-family: 'Poppins', sans-serif;
    color: black;
  }

  a {
    text-decoration: none;
  }
`;

export default App;
