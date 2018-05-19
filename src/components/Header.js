import React, { Component } from 'react';
import logo from './../logo.svg';

class Header extends Component {
  render() {
    return (
      <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <img src="https://www.shareicon.net/data/128x128/2016/06/25/786549_people_512x512.png" className="App-logo" alt="logo" />
        <h1 className="App-title">Hello React</h1>
      </header>
    );
  }

}

export default Header;
