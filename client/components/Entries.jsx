import React, { Component } from 'react';

class Entries extends Component {

  render() {
    return (
      <div className= {'entry-div'}>
        <h2>Title: {this.props.entries.title}</h2>
        <h2>Category: {this.props.entries.category}</h2>
        <h2>Description: {this.props.entries.text}</h2>
        <h2>Date: {this.props.entries.date}</h2>
      </div>
    );
  }
}

export default Entries;