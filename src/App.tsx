import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import Home from './components/Home';
import Movies from './components/Movies';
import Photos from './components/Photos';
import Navigation from './components/Navigation';

// https://www.freecodecamp.org/news/react-router-in-5-minutes/

const App: React.FC = () => {
  return (
    <div className="App">
      <Navigation />
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/movies" component={Movies} />
        <Route path="/photos" component={Photos} />
      </Switch>
    </div>
  );
}

export default App;
