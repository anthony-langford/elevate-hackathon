import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Elevate</h1>
        </header>
        <p className="App-intro">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.4394551531486!2d-79.39082058417317!3d43.659829479121136!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34b7ccd8ba1f%3A0x7e6f7af0cc4e65f3!2sMaRS+Discovery+District!5e0!3m2!1sen!2sca!4v1537641078119"
          width={"100%"}
          height={"400"}
          frameBorder={"0"}
          style={{"border": 0}}
          allowFullScreen
          title={'map'}
        ></iframe>
          PLACE IS ON FIRE!
        </p>
      </div>
    );
  }
}

export default App;
