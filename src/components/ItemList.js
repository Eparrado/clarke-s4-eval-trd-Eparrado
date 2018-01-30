import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    return (
      <li>
        <h2>{ this.props.name }</h2>
        <img src={ this.props.image } alt={ `Foto de ${this.props.name}` }/>
        <img src={ `Images/${ this.props.house }.jpg` }/>
        <p>{ this.props.alive ? 'Vivo' : 'Muerto' }</p>
      </li>
    );
  }
}

export default ItemList;
