import React from 'react';
import {
  BrowserRouter as Router,
  Link,
  Switch,
  Route,
} from 'react-router-dom';
import Home from './Home';
import Calculator from './Calculator';
import Quote from './Quote';

const App = () => (
  <Router>
    <header className="row">
      <div className="row cross-center flex">
        <h1>Math-Magicians</h1>
      </div>
      <div className="row main-center cross-center navs">
        <Link to="/">Home</Link>
        <Link to="/calculator">Calculator</Link>
        <Link to="/quote">Quote</Link>
      </div>
    </header>
    <Switch><Route exact path="/"><Home /></Route></Switch>
    <Switch><Route exact path="/calculator"><Calculator /></Route></Switch>
    <Switch><Route exact path="/quote"><Quote /></Route></Switch>
  </Router>
);

export default App;
