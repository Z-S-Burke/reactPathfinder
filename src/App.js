import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weapons from './Weapons';
// import Armory from 'Armory';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-heading"> WEAPONS </h1>
        </header>
        <Weapons displaytext="First Component Data" />
      </div>
    );
  }
}

export default App;
