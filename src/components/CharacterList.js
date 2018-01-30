import React, { Component } from 'react';
import ItemList from './ItemList'

class CharacterList extends Component {

  render() {
    const filterList = this.props.characterData.filter((characterItem) => {
        return characterItem.name.toLowerCase().includes(this.props.filter);
      });

    return (
      <section>

        <ul className="content-list">
        {filterList.map((characterItem,index) =>
            <ItemList
            key = {index}
            name = { characterItem.name }
            image = { characterItem.image }
            house = { characterItem.house }
            alive = { characterItem.alive }
            />
          )}
        </ul>

      </section>
    );
  }
}

export default CharacterList;
