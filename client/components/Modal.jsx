import React, { Component } from 'react';
import '../Modal.css';
//import './modal.css';
//= ({ handleClose, showModal, prop}) => {
class Modal extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const showHideClassName = this.props.show ? "modal display-block" : "modal display-none";
    return (
      <div className={showHideClassName}>
        <section className="modal-main">
          <div className={'main-dev'}>
            <div className={'form-div'}>
              <form className={'entryForm'} method="post" action="/api/test">


                <label for="category">Choose a category:</label>

                <select name="category" id="category" className={'form-items'}>
                  <option value={`${this.props.entries.category}`}>{this.props.entries.category}</option>
                  <option value="Technical Challenges">Technical Challenges</option>
                  <option value="APC Notes">APC Notes</option>
                  <option value="Reflections">Reflections</option>
                  <option value="Misc.">Misc.</option>
                </select>

                {/* <input name='category' type='text' placeholder='Category...'></input> */}
                <input className={'form-items'} name='title' type='text'>{this.props.entries.title}</input>
                <div> <textarea id={'description-id'} className={'form-items'} name='text' type='text' >{this.props.entries.text}</textarea> </div>
                <input className={'form-items'} className={'create-btn'} type='submit' value="Update Entry" className={'closeBtn'} onClick={handleClose}></input>
              </form>
            </div>
          </div >
        </section>
      </div>
    )
  };
}
//        <button className={'closeBtn'} type="button" onClick={handleClose} onClick={refresh}>


export default Modal;