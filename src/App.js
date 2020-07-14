import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import Header from './components/Header';
import Statistique from './components/Statistique';
import Map from './components/Map';
import Services from './components/user/Services';
import SignIn from './components/user/SignIn';
import Auth from './components/user/Auth';
import Forfaits from './components/user/Forfaits';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
function App() {

  return (
    <div className="App">
      <Router>
      
      <Switch>
        <Route path='/Home' component={Home} />
        <Route path='/stat' component={Statistique} />
        <Route path='/map' component={Map} />
        <Route path= '/Services' component= {Services} />
        <Route path= '/Auth' component= {Auth} />
        <Route path= '/SignIn' component= {SignIn} />
        <Route path= '/null' component= {null} />
        <Route path= '/Forfaits' component= {Forfaits} />
        
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
