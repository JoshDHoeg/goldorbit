import React, { Component } from 'react';
import './styles/BB8.css';
import body from './assets/BB8BODY.svg';
import head from './assets/BB8HEAD.svg';

export default class BB8 extends Component {
  render() {
    return (
      <div className="bb8-wrapper">
        <div className="bb8-head">
          <img src={head} alt="Gold Orbit Logo" />
        </div>
        <div className="bb8-body">
          <img src={body}  alt="Gold Orbit Logo" height="160px" width="160px"/>
        </div>
      </div>
    );
  }
}
