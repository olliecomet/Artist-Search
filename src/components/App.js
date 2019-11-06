import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import SearchArtistPage from '../components/containers/SearchArtistPage';
import Header from './header/Header';
import Footer from './footer/Footer';
import Discography from './containers/Discography';

const App = () => {
  
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={SearchArtistPage} />
        <Route path="/albums/:id" component={Discography} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default App;
