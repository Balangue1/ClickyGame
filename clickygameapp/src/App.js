import React, { Component } from 'react';
import logo from './logo.svg';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import CharacterCard from "./components/CharacterCard";
import './App.css';
import './images/crystal1.jpeg';
import './images/crystal2.jpeg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav class="navbar">
         <ul>
           <li class="brand">..</li> ==$0
           <li class>Click an image to begin!</li>
           <li>
             <img src="crystal1.jpeg"/>
             <img src="crystal2.jpeg"/>
            </li>
         </ul>
        </nav>   
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Clicky Game!</h1>
          <h2 className="App-instruct">Click on an image to earn points, but don't click on any image more than once!</h2>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
