import React, { Component } from 'react';
import ItemList from './ItemList'

class CharacterList extends Component {

  render() {
    const filterList = this.props.characterData.filter((characterItem) => {
        return characterItem.name.toLowerCase().includes(this.props.filter.toLowerCase());
      });

    return (
      <section>
        <p>Se han encontrado {filterList.length} de {this.props.characterData.length} personajes</p>

        <ul className="container-list">
        {filterList.map((characterItem,index) =>
            <ItemList
            key = {index}
            {...characterItem}
            />
          )}
        </ul>

      </section>
    );
  }
}

export default CharacterList;
