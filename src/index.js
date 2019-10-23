import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import App from './App';
import Weapons from './Weapons';
import Armor from './Armor';
import Character from './Character';
import NewCharacter from './NewCharacter';
import User from './User';
import Register from './Register';
import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
      <div>
        <Route path="/" component={App} />  
        <Route path="/character" component={Character} />
        <Route path="/weapons" component={Weapons} />
        <Route path="/armor" component={Armor} />
        <Route path="/newCharacter" component={NewCharacter} />
        <Route path="/user" component={User} />
        <Route path="/register" component={Register} />
      </div>
    </Router>
  )

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker.unregister();
