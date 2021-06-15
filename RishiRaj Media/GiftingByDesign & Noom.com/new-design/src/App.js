import './App.css';

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import HomePage from "./Pages/HomePage"
import Q1 from './Questions/Q1';
import q2 from './Questions/q2';
//import q4 from './Questions/q4';
import Q5 from './Questions/Q5';
import Q7 from './Questions/Q7'
import Q6 from './Questions/Q6';
import q22 from './Questions2/q2';
import q32 from './Questions3/q2';
import q33 from './Questions3/q3';
//import q3 from './Questions/q3';
import q23 from './Questions2/q3';
import q24 from './Questions2/q4';
//import LoginPage from './Questions/LoginPage';
import q34 from './Questions3/q4';
import q35 from './Questions3/q5';



function App() {
  return (
     <Router>
     
      <Switch>
        <Route path="/" exact component={HomePage}/>
        <Route path="/Q1" component ={Q1}/>
         <Route path="/q2" component ={q2}/>
        {/* <Route path="/q4" component ={q4}/> */}
        <Route path="/Q5" component ={Q5}/> 
        <Route path="/Q6" component ={Q6}/>
        <Route path="/Q7" component ={Q7}/>
      {/* <Route path="/LoginPage" component ={LoginPage}/> */}
        <Route path="/q22" component ={q22}/>
        <Route path="/q32" component ={q32}/>
        <Route path="/q33" component ={q33}/>
        {/* <Route path="/q3" component ={q3}/> */}
        <Route path="/q23" component ={q23}/>
        <Route path="/q24" component ={q24}/>
        <Route path="/q34" component ={q34}/>
        <Route path="/q35" component ={q35}/>
      </Switch>
  
      </Router>
  );
}

export default App;
