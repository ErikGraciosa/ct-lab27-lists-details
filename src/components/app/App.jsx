import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Details from '../details/Details';
import Home from '../home/Home';
import Header from '../header/Header';


export default function App() {
  return (
    <div>
      <Router>
        <Header />
        <Switch>
        <Route 
            path="/" 
            exact
            render={(routerProps) => <Home {...routerProps} />} 
          />
          <Route 
            path="/details" 
            exact
            render={(routerProps) => <Details {...routerProps} />} 
          />
        </Switch>
      </Router>
    </div>
  );
}
