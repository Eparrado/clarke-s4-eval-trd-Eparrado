import React, { Component } from 'react';

class SearchInput extends Component {

  render() {
    return (
      <input className="input-style" type="text" name="buscar" onChange = {this.props.handleChange} value = {this.props.filter} placeholder="Introduce un nombre para buscar"/>
    )};
}

export default SearchInput;
