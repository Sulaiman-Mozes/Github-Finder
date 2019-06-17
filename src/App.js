import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/';
import About from './components/pages/About';
import Navbar from './components/common/Navbar';
import NotFound from './components/common/NotFound'
import User from './components/users/User';
import GithubState from './context/github/State';
import AlertState from './context/alerts/State';
import './assets/css/App.css';

const App = () => (
  <GithubState>
    <AlertState>
      <Router>
        <div className="App">
          <Navbar />
          <div className="container">
            <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/user/:username' component={User} />
              <Route exact path='/about' component={About} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </div>
      </Router>
    </AlertState>
  </GithubState>
);

export default App;
