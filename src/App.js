import logo from './logo.svg';
import React from 'react';
import './App.css';
import UserPage from './container/UserPage';
import { BrowserRouter as Switch, Route, Navigate } from 'react-router-dom';
import {BrowserRouter} from 'react-router-dom';

function App() {
  
  const username = prompt('Enter a Github username');
  return (
    <BrowserRouter>
    <Switch>
      <Route path = "/:userName" component = {UserPage} />
        <Navigate to = {"/${username}"} /> 
    </Switch>
    </BrowserRouter> 
  );
}

export default App;
