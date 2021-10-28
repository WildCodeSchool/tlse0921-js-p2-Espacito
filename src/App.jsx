import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import PresentationIss from './components/PresentationIss';
import IssTracker from './components/IssTracker';
import CelestObjects from './components/CelestObjects';
import Pod from './components/Pod';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navigation />
      </div>
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
      </Switch>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
