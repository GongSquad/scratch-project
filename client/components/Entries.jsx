import React, { Component } from 'react';

class Entries extends Component {
  constructor(props) {
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
  }
  handleDelete() {
    fetch(this.props.deleteEntries + '/' + this.props.entryId, { method: 'DELETE', headers: { 'Content-type': 'application/json; charset=UTF-8' } })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  render() {
    return (
      <div className={'entry-div'}>
        <div className={'h-tags'}>
          <h4>{this.props.entries.title}</h4>
          <h4>{this.props.entries.category}</h4>
          {/* <h4>{this.props.entries.date}</h4> */}
        </div>
        <p className={'description'}>{this.props.entries.text}</p>
        <button className={'delete-btn'} onClick={this.handleDelete}>Delete Entry</button>
      </div>
    );
  }
}

export default Entries;