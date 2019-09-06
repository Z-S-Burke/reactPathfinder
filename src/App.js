import React, { useState, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Weapons from './Weapons';
import Armor from './Armor';
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
          <div className="w-100 d-flex justify-content-around align-items-center">
            <Link> Character </Link>
            <Link to="/weapons"> Weapons </Link>
            <Link to="/armor"> Armor </Link>
          </div>
        </Collapse>
      </div>
    );
  }

  render() {

    return (
      <div className="App">
        <header className="App-heading">
          <Router>
            <Navbar className="d-flex justify-content-between align-items-center">
              <this.navHeader />
            </Navbar>
            <h1 className="App-heading"> Character Builder </h1>
            <img src={logo} className="App-logo" alt="logo" />
            <Route path="/weapons" component={Weapons} />
            <Route path="/armor" component={Armor} />
          </Router>
        </header>
      </div>
    );
  }
}

export default App;
