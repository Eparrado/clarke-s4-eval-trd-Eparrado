import React, { Component } from 'react';
import CharacterList from './components/CharacterList';
import SearchInput from './components/SearchInput';

const API = 'https://hp-api.herokuapp.com/api/characters';
class App extends Component {

    constructor(props) {
      super(props);
      this.state = {
        characterStore : [],
        filter : ''
      }
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
    const {characterStore, filter} = this.state;

    return (
    <div className="App">
    <section className="hero">
    <img className="header-logo" src="Images/header-logo.png" alt="logo Harry Potter" />
    <h1>Buscador de personajes</h1>
    </section>
    <SearchInput handleChange={this.handleChange} filter={filter}/>
    <CharacterList characterData = {characterStore} filter={filter}/>
    </div>
  );
  }
}

export default App;
