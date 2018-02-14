import React, { Component } from 'react';

class ItemList extends Component {
  showHouseLogo() {
    const noHouse = this.props.house ? '' : 'hidden';
    
    return (
      <img className={'house-logo ' + noHouse} src={ `Images/${ this.props.house }.png` } alt={ `Logo de la casa ${this.props.house}` }/>
    );
  }

  render() {
    const backgroundPhoto = {backgroundImage: `url('${this.props.image}')`};
    const deadOrAlive = this.props.alive ? 'heart-full' : 'heart';
    const staff = this.props.hogwartsStaff ? 'Forma parte del staff' : 'No Forma parte del staff';

    return (
      <li className="items-list">
        <div className="character-photo" style={backgroundPhoto}>
        </div>
        {this.showHouseLogo()}
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.dateOfBirth }</h3>
        <h3>{ staff }</h3>
        <img className={ deadOrAlive } src={`Images/${ deadOrAlive }.svg`} alt="Indicador de vida"/>
      </li>
    );
  }
}

export default ItemList;
