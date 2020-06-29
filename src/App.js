import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home'
import Header from './components/Header'
import Statistique from './components/Statistique';
import Map from './components/Map'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
      <Header></Header>
      <Switch>
        <Route path='/Home' component={Home} />
        <Route path='/stat' component={Statistique} />
        <Route path='/map' component={Map} />
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
