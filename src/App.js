import React, { Component } from 'react';
import CharacterList from './components/CharacterList';

const API = 'http://hp-api.herokuapp.com/api/characters';
class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        characterStore : [],
        filter : ''
      }
      this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount () {
      fetch(API)
        .then(response => response.json())
        .then(data => {
          this.setState({
            characterStore : data
          });
        });
    }

    handleChange = (event) => {
      this.setState({
        filter : event.target.value
      });
    }

  render() {
    const characterStore = this.state.characterStore;

    return (
    <div className="App">
    <h1>My Harry Potter Character List</h1>
    <input type="text" name="buscar" onChange = {this.handleChange} value = {this.state.filter} placeholder="Introduce un nombre para buscar"/>
    <CharacterList characterData = {characterStore} filter={this.state.filter}/>
    </div>
  );
  }
}

export default App;
