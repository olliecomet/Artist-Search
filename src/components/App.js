import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchArtistPage from '../components/containers/SearchArtistPage';
import Header from './header/Header';
import Footer from './footer/Footer';

const App = () => {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchArtistPage} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
