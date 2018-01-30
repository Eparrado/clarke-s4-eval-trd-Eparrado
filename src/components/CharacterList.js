import React, { Component } from 'react';
import ItemList from './ItemList'

const API = 'http://hp-api.herokuapp.com/api/characters';
class CharacterList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      CharacterStore : []
    }
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount () {
    fetch(API)
      .then(response => response.json())
      .then(data => {
        this.setState({
          CharacterStore : data
        });
      });
  }

  render() {
    const CharacterStore = this.state.CharacterStore;
    return (
      <section>

        <ul className="content-list"> {
          CharacterStore.map((CharacterItem,index) =>
            <ItemList
            key = {index}
            name = { CharacterItem.name }
            image = { CharacterItem.image }
            house = { CharacterItem.house }
            alive = { CharacterItem.alive }
            />
          )}
        </ul>

      </section>
    );
  }
}

export default CharacterList;
