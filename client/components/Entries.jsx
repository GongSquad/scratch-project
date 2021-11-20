import React, { Component } from 'react';

class Entries extends Component {

  render() {
    return (
      <div>
        <h2>Title: {this.props.entries.title}</h2>
        <h2>Category: {this.props.entries.category}</h2>
        <h2>Description: {this.props.entries.text}</h2>
      </div>
    );
  }
}