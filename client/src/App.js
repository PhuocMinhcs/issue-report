import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import NavbarComponent from './components/NavbarComponent';
import Application from './views/applications';
import ApplicationDetails from './views/application-details';

import './App.scss';

export default function App() {
  return (
    <Router>
      <NavbarComponent />
      <div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/application/:id">
            <ApplicationDetails />
          </Route>
          <Route path="/">
            <Application />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}
