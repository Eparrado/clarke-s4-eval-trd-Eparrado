import React, { Component } from 'react';

class ItemList extends Component {
  render() {
    const backgroundPhoto = {backgroundImage: `url('${this.props.image}')`};
    const noHouse = this.props.house ? '' : 'hidden';
    const deadOrAlive = this.props.alive ? 'heart-full' : 'heart';

    return (
      <li className="items-list">
        <div className="character-photo" style={backgroundPhoto}>
        </div>
        <img className={'house-logo ' + noHouse} src={ `Images/${ this.props.house }.png` } alt={ `Logo de la casa ${this.props.house}` }/>
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.birth }</h3>
        <img className={ deadOrAlive } src={`Images/${ deadOrAlive }.svg`} alt="Indicador de vida"/>
      </li>
    );
  }
}

export default ItemList;
