import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weapons from './Weapons';
import Armor from './Armor';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Armory from 'Armory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Router>
            <div>
              <nav>
                <ul className="d-flex border border-bottom justify-content-around">
                  <li>
                    <Link to="/weapons"> Weapons </Link>
                  </li>
                  <li>
                    <Link to="/armor"> Armor </Link>
                  </li>
                </ul>
              </nav>
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="App-heading"> Character Builder </h1>
              <Route path="/weapons" component={Weapons} />
              <Route path="/armor" component={Armor} />
            </div>
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
