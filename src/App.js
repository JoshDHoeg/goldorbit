import React, { Component } from 'react';
import logo from './GoldOrbit_Logo_WGT.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Gold Orbit Logo" />
          <p>
            The future is on its way...
          </p>
        </header>
      </div>
    );
  }
}

export default App;
