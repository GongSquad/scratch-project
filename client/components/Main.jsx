import React, { Component } from "react";
// import { Field, reduxForm } from "redux-form";
// import { connect } from "react-redux";
// import { createEntry } from "../actions/actions";

//might have problem with props here
class Main extends Component {
  constructor(props) {
    super(props)
  }
  
  render() {
    return (
      <div>
        <form method="post" action="/api/test">

          <input name='category' type='text' placeholder='Category...'></input>
          <input name='title' type='text' placeholder='Title...'></input>
          <input name='text' type='text' placeholder='Description...'></input>
          <input type='submit' value="Create Entry"></input>
        </form>
      </div >
    )
  }
}

export default Main;