import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Link } from "react-router-dom";
import Home from './home';
import Schedule from './schedule';

export default function App() {
  return (
    <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/schedule">Schedule</Link>
          </li>
        </ul>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/schedule" component={Schedule} />
        </Switch>  
    </div>
    

  )
}
