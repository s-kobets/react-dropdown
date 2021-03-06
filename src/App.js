import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Dropdown from './components/dropdown'

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        <Dropdown
          button={<button>Click Me</button>}
          template={<span>Hello World</span>}
        />
      </div>
    );
  }
}

export default App;
