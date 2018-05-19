import React, { Component } from 'react';
import './App.css';
// import Header from './components/Header';
import Card from './components/Card';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Card name="Eunice"
        profession="Student"/>
      </div>
    );
  }
}

export default App;
