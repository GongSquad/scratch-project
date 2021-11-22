import React, { Component } from "react";
import Entries from './Entries';
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createEntry } from "../actions/actions";

//might have problem with props here
class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      entries: []
    }
    // this.handleDelete = this.handleDelete.bind(this);
  }
  componentDidMount() {
    fetch(this.props.getEntries)
      .then(res => res.json())
      .then((res) => this.setState({ entries: res }))
      .catch((error) => {
        console.log(`There is an ${error} when mounting Main component`);
      })
  }
  componentDidUpdate() {
    fetch(this.props.getEntries)
      .then(res => res.json())
      .then((res) => this.setState({ entries: res }))
      .catch((error) => {
        console.log(`There is an ${error} when updating Main component`);
      })
  }
  render() {
    const entry = [];
    for (let i = 0; i < this.state.entries.length; i++) {
      entry.push(<Entries entries={this.state.entries[i]} deleteEntries={this.props.deleteEntries} entryId={this.state.entries[i]._id} />);
    }
    return (
      <div className={'main-dev'}>
        <div className={'form-div'}>
        <form className={'entryForm'} method="post" action="/api/test">


          <label for="category">Choose a category:</label>

          <select name="category" id="category" className={'form-items'}>
            <option value="Technical Challenges">Technical Challenges</option>
            <option value="APC Notes">APC Notes</option>
            <option value="Reflections">Reflections</option>
            <option value="Misc.">Misc.</option>
          </select>

          {/* <input name='category' type='text' placeholder='Category...'></input> */}
          <input className={'form-items'} name='title' type='text' placeholder='Title...'></input>
         <div> <textarea id={'description-id'} className={'form-items'} name='text' type='text' placeholder='Description...'></textarea> </div>
          <input className={'form-items'} className={'create-btn'} type='submit' value="Create Entry"></input>
        </form>
        </div>
        <div className={'outer-entry'}>{entry}</div>
      </div >
    )
  }
}

export default Main;