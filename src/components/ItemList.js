import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    const backgroundPhoto = {backgroundImage: `url('${this.props.image}')`};
    return (
      <li className="items-list">
        <div className="character-photo" style={backgroundPhoto}>
        </div>
        <img className="house-logo" src={ `Images/${ this.props.house }.png` } alt={ `Logo de la casa ${this.props.house}` }/>
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.birth }</h3>
        <p>{ this.props.alive ? 'Vivo' : 'Muerto' }</p>
      </li>
    );
  }
}

export default ItemList;
