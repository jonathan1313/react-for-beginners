import React, { Component } from 'react';
import './App.css';
import List from './List'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      term: '',
      items: [],
      editOn: false,
      itemEditIndex: null
    };

    var cachedHits = [];
  }

  componentDidMount = () => {
    this.cachedHits = JSON.parse(localStorage.getItem('listItems'));
    if (this.cachedHits) {
      this.setState ({
        term: '',
        items: this.cachedHits
      });
    }
  }

  onChange = (event) => {
    this.setState({term: event.target.value});
  }

  onSubmit = (event) => {
    event.preventDefault()

    if (this.state.term !== '') {    
      this.setState({
        term: '',
        items: [...this.state.items, this.state.term]
      }, function() {
        localStorage.setItem('listItems', JSON.stringify(this.state.items));        
      });
    }     
  }

  deleteItem = (index) => {
    if (index > -1) {
      let newList = this.state.items;    
      newList.splice(index, 1);
      this.setState({items: newList}, 
        function() {
          localStorage.setItem('listItems', JSON.stringify(newList));        
      });
    }
  }

  startEditItem = (index) => {
    if (index > -1) {      
      let newList = this.state.items;
      this.setState({term: newList[index], editOn: true, itemEditIndex: index});
    }
  }

  saveEditedItem = () => {
    if (this.state.term !== '') {
      let editedList = this.state.items;
      editedList[this.state.itemEditIndex] = this.state.term;

      this.setState({
        term: '',
        items: editedList,
        editOn: false, 
        itemEditIndex: null
      }, function() {
        localStorage.setItem('listItems', JSON.stringify(editedList)); 
      });
    }
  }

  render() {
    return (
      <div className="App">
        <form className="App" onSubmit={this.onSubmit}>        
          <input value={this.state.term} onChange={this.onChange} />
          {this.state.editOn ? <button class="btn sumbit" onClick={this.saveEditedItem}>Edit</button> : <button class="btn sumbit">Submit</button>}          
        </form>
        <List items={this.state.items} deleteItem={this.deleteItem} startEditItem={this.startEditItem}/>        
      </div>
    );
  }

}
