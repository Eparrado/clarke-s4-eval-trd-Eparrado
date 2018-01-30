import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    return (
      <li>
        <h2>{ this.props.name }</h2>
        <img src={ this.props.image } alt={ `Foto de ${this.props.name}` }/>
        <p>{ this.props.house }</p>
        <p>{ this.props.alive ? 'Vivo' : 'Muerto' }</p>
      </li>
    );
  }
}

export default ItemList;
