import React, { Component } from 'react';
import '../Modal.css';
//import './modal.css';
//= ({ handleClose, showModal, prop}) => {
class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    // const showHideClassName = this.props.showModal ? "modal display-block" : "modal display-none" ;
    return (

        <section className="modal-main">

            <div>
              <form method="update" action={`/api/update/${this.props.entries._id}`}>


                <label for="category">Choose a category:</label>

                <select name="category" id="category">
                  <option value={`${this.props.entries.category}`}>{this.props.entries.category}</option>
                  <option value="Technical Challenges">Technical Challenges</option>
                  <option value="APC Notes">APC Notes</option>
                  <option value="Reflections">Reflections</option>
                  <option value="Misc.">Misc.</option>
                </select>

                {/* <input name='category' type='text' placeholder='Category...'></input> */}
                {/* need to change to textarea */}
                <input name='title' type='text'></input>
                <div> <textarea name='text' type='text' defaultValue ={`${this.props.entries.text}`} ></textarea> </div>
                <input type='submit' value="Update Entry" className={'closeBtn'} onClick={this.props.hideModal}></input>
              </form>
            </div>

        </section>

    )
  };
}
//        <button className={'closeBtn'} type="button" onClick={handleClose} onClick={refresh}>


export default Modal;