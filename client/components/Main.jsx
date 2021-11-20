import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { createEntry } from "../actions/actions";

//might have problem with props here
class Main extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     titleIn: 
  //   }
  //   }
  // onSubmit(formValues) {
  //   let dataBody = {
  //     "title":
  // //   }
  //   this.props.createEntry(formValues);
  // } 
  // showModal = () => {
  //   this.setState({ show: true });
  // };
  render() {
    return(
      <form onSubmit= {dispatch(createEntry())}>

      </form>
    )
  }
}

export default Main;