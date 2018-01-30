import React, { Component } from 'react';

class SearchInput extends Component {

  render() {
    return (
      <section>
      <input type="text" name="buscar" onChange = {this.props.handleChange} value = {this.props.filter} placeholder="Introduce un nombre para buscar"/>
      </section>
    );
  }
}

export default SearchInput;
