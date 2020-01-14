import React from 'react';
import './App.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Header from './pages/Header'
import Taps from './pages/taps/Taps'
import Footer from './pages/Footer'

import Create from './pages/taps/Create'
import Edit from './pages/taps/Edit'
import Show from './pages/taps/Show'

export default function App() {
  return (
    <Router>
      <Header></Header>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Mijn SmartTapps</Link>
            </li>
            <li>
              <Link to="/taps/create">Nieuwe SmartTapp maken</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route path="/" exact component={Taps}/>
          <Route path="/taps/create" component={Create}/>
          <Route path="/taps/:id/edit" component={Edit}/>
          <Route path="/taps/:id/show" component={Show}/>
        </Switch>
        
      </div>
      <Footer></Footer>
    </Router>
  );
}
