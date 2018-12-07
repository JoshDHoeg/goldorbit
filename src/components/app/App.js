import React, { Component } from 'react';
import BB8 from './../bb8/BB8';
import Subscribe from './../subscribe/Subscribe';
import logo from './assets/GoldOrbit_Logo_WGT.svg';
import './styles/App.css';

export default class App extends Component {

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="Gold Orbit Logo" />
          <BB8 />
          <h1>Launch Sequence Engaged....</h1>
          <Subscribe />
        </header>
      </div>
    );
  }
}
