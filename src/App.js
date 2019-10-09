import React, { useState, Component } from 'react';
import logo from './logo.png';
import './App.css';
import Weapons from './Weapons';
import Armor from './Armor';
import Character from './Character';
import NewCharacter from './NewCharacter';
import { Navbar, Button, Collapse } from 'react-bootstrap';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
// import Armory from 'Armory';



class App extends Component {

  navHeader() {
    const [open, setOpen] = useState(false);

    return (
      <div className="w-100 d-flex">
        <Button
          onClick={() => setOpen(!open)}
          aria-controls="example-collapse-text"
          aria-expanded={open}
          className="bg-dark text-light"
        >
          SampleUser
        </Button>
        <Collapse in={open}>
          <div className="w-100 d-flex flex-column justify-content-around align-items-center">
            <Link to="/character"> Character </Link>
            <Link to="/weapons"> Weapons </Link>
            <Link to="/armor"> Armor </Link>
            <Link to="/newCharacter"> New </Link>
          </div>
        </Collapse>
      </div>
    );
  }

  render() {

    return (
      <div>
        <header className="App-heading">
          <Router>
            <Navbar className="d-flex justify-content-between align-items-center">
              <this.navHeader />
            </Navbar>
            <h1 className="App-heading d-flex justify-content-center"> Character Builder </h1>
            <img src={logo} className="App-logo ml-5" alt="logo" />
            <Route path="/character" component={Character} />
            <Route path="/weapons" component={Weapons} />
            <Route path="/armor" component={Armor} />
            <Route path="/newCharacter" component={NewCharacter} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
