import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

// import logo from './logo.svg';
import Header from './components/Header/Header'
import Home from './pags/SearchArticle/SearchArticle';
import Saved from './pags/SavedArticle/SavedArticle';

import './App.css';
const App =() =>(
      <Router>
       <div>
         <Header/>
         <Route exact path="/" component={Home} />
         <Route exact path="/home" component={Home} />
         <Route exact path="/saved" component={Saved} />
      </div>
      </Router>

); 
export default App;
