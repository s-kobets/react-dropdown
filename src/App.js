import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Select from 'react-select'
import styled from 'styled-components';

const options = [
  { value: 'one', label: 'One' },
  { value: 'two', label: 'Two' }
];

function logChange(val) {
  console.log("Selected: " + val);
}

const menu = (props) => {
  <div>bu</div>
}

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

        <Select
          name="form-field-name"
          options={options}
          onChange={logChange}
          value="one"
          multi={false}
          searchable={false}
          clearable={false}
        />
      </div>
    );
  }
}

export default App;
