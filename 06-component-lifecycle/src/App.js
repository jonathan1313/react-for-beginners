import React, { Component } from 'react';
import './App.css';
import Counter from './Counter.js';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  incrementCounter = () => {
    this.setState({
      counter: ++this.state.counter
    });
  };

  render() {
    return (
      <div>
        <Counter counter={this.state.counter} />
        <button onClick={this.incrementCounter}>Click1</button>
      </div>
    );
  }

}

export default App;
