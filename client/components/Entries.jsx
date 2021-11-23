import React, { Component } from 'react';
import Modal from './Modal';

class Entries extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false
    }
    this.handleDelete = this.handleDelete.bind(this);
    this.show = this.show.bind(this);
    this.hideModal = this.hideModal.bind(this);
  }
  show = () => {
    this.setState({ showModal: true });
  };

  hideModal = () => {
    this.setState({ showModal: false });
  };

  handleDelete() {
    fetch(this.props.deleteEntries + '/' + this.props.entryId, { method: 'DELETE', headers: { 'Content-type': 'application/json; charset=UTF-8' } })
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
  }
  render() {
    {
      if (this.state.showModal === true) {
        return (<div className={'entry-div'}>
          <Modal updateEntries={this.props.updateEntries} entryId={this.props.entryId} showModal={this.state.showModal} hideModal={this.hideModal} entries={this.props.entries} />
          <div className={'h-tags'}>
            <h4>{this.props.entries.title}</h4>
            <h4>{this.props.entries.category}</h4>
            {/* <h4>{this.props.entries.date}</h4> */}
          </div>
          <p className={'description'}>{this.props.entries.text}</p>
          <div> <button className={'update-btn'} onClick={this.show}>Update Entry</button><button className={'delete-btn'} onClick={this.handleDelete}>Delete Entry</button> </div>
        </div>

        )
      }
      else {
        return (
          <div className={'entry-div'}>
            <div className={'h-tags'}>
              <h4>{this.props.entries.title}</h4>
              <h4>{this.props.entries.category}</h4>
              {/* <h4>{this.props.entries.date}</h4> */}
            </div>
            <p className={'description'}>{this.props.entries.text}</p>
            <div> <button className={'update-btn'} onClick={this.show}>Update Entry</button><button className={'delete-btn'} onClick={this.handleDelete}>Delete Entry</button> </div>
          </div>
        )
      }
    }
  }
}
export default Entries;