import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createEntry } from "../actions/actions";

//might have problem with props here
class Main extends Component {
  constructor(props) {
    super(props);
    this.state= {
      entries: []
    }
  }
  componentDidMount() {
    fetch(this.props.getEntries)
    .then(res => res.json())
    .then((res) => this.setState({ entries: res }))
    .catch((error) => {
      console.log(`There is an ${error} when mounting Quiz component`);
    })
  }

  render() {
    const entry = [];
    for(let i = 0; i < this.state.entries.length; i++) {
      <Entries entries = {this.state.entries[i]} />
    }
    return (
      <div>
        <form method="post" action="/api/test">

          <input name='category' type='text' placeholder='Category...'></input>
          <input name='title' type='text' placeholder='Title...'></input>
          <input name='text' type='text' placeholder='Description...'></input>
          <input type='submit' value="Create Entry"></input>
        </form>
        <div>{entry}</div>
      </div >
    )
  }
}

export default Main;