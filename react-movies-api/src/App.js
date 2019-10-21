import React from 'react';
import {BrowserRouter, Switch, Route}from 'react-router-dom';
import Header from './components/Header';
import ByGenre from './views/ByGenre'
import Home from './views/Home';
import Movie from './views/Movie';
import './App.css';
import UpComing from './views/UpComing';
import Series from './views/Series';
import NotFound from './views/NotFound';

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header/>
        <Switch>
          <Route path="/" component={Home} exact/>
          <Route path="/movie" component={Movie} exact/>
          <Route path="/UpComing" component={UpComing} exact/>
          <Route path="/ByGenre" component={ByGenre} exact/>
          <Route path="/Series" component={Series} exact/>
          <Route component={NotFound} exact/>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
