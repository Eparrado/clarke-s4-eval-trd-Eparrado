import React, { Component } from 'react';
import SearchInput from './components/SearchInput';
import CharacterList from './components/CharacterList';


class App extends Component {
  render() {
    return (
    <div className="App">
    <h1>My Harry Potter Character List</h1>
    <SearchInput />
    <CharacterList />
    </div>
  );
  }
}

export default App;
