import React, { Component } from 'react';
import './App.css';
import DottedBox from './DottedBox.js';
import Box from './Box.js';
import DashedBox from './DashedBox.js'
import OutsetBox from './OutsetBox.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <DottedBox />
        <Box />
        <DashedBox />
        <OutsetBox />
      </div>
    );
  }
}

export default App;
