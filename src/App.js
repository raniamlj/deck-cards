import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './containers/Container'
import Container from './containers/Container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Container></Container>
      </div>
    );
  }
}

export default App;
