import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import Details from '../details/Details';
import AllCharacters from '../allCharacters/AllCharacters';
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
            render={(routerProps) => <AllCharacters {...routerProps} />} 
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
