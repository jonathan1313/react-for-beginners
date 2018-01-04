import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      result: [],
      // img: '',
      // showImg: false
    };
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const api_key = 'dc6zaTOxFJmzC';
    const url = `http://api.giphy.com/v1/gifs/search?q=${this.state.term}&api_key=${api_key}`;
    fetch(url)
      .then(response => response.json())
      // .then(data => this.setState({ term: '', img: data.data[0].images.fixed_height.url, showImg: true }))
      .then(data => this.setState({term: '', result: data.data}))
      .catch(e => console.log('error', e));
  }

  clearSearch = () => {
    this.setState({ term: '', result: []});
  }

  render() {
    return (
      <div className="App">
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.term} onChange={this.onChange} />
          <button>Search!</button>
          <button type="button" onClick={this.clearSearch}>Clear</button>
        </form>
        <ul>
          {
            this.state.result.map((img, index) => <li key={index}><img src={img.images.fixed_height.url} height="200" alt={this.state.term} /></li>)          
          }
        </ul>

      </div>
    );
  }
}

export default App;
