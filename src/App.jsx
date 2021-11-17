import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PresentationIss from './components/PresentationIss';
import IssTracker from './components/IssTracker';
import Pod from './components/Pod';
import Footer from './components/Footer';
import Ressources from './components/Ressources';
import CelestObjects from './components/CelestObjects';
import Flappiss from './components/Flappiss';

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
          <Route path="/iss-presentation">
            <PresentationIss />
          </Route>
          <Route path="/iss-tracker">
            <IssTracker />
          </Route>
          <Route path="/celest-objects">
            <CelestObjects />
          </Route>
          <Route path="/picture-of-the-day">
            <Pod />
          </Route>
          <Route path="/ressources">
            <Ressources />
          </Route>
          <Route path="/flappiss">
            <Flappiss />
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
