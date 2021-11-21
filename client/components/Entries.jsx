import React, { Component } from 'react';

class Entries extends Component {
  constructor(props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    fetch(this.props.deleteEntries + '/' + this.props.entryId, {method: 'DELETE', headers: {'Content-type': 'application/json; charset=UTF-8'}})
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }
  render() {
    return (
      <div className={'entry-div'}>
        <h4>Title:</h4> <p> {this.props.entries.title}</p>
        <h4>Category:</h4> <p>{this.props.entries.category}</p>
        <h4>Description:</h4> <p>{this.props.entries.text}</p>
        <h4>Date: </h4> <p>{this.props.entries.date}</p>
          <button onClick={this.handleDelete}>Delete Entry</button>
      </div>
    );
  }
}

export default Entries;