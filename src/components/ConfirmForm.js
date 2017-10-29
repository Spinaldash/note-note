import React, { Component } from 'react';

class ConfirmForm extends Component {
  
  nukeNote(event) {
    event.preventDefault();
    const id = this.props.confirmId
    this.props.removeNote(id);
    this.props.closeConfirm();
  }

  render(){
    return(
      <div>
        <h1>Delete Note</h1>
        <p>Are you sure you want to delete this note?</p>
        <div className="footer-background">
          <div className="footer">
            <button className="MJButton gray" onClick={this.props.closeConfirm}>Cancel</button>
            <button className="MJButton teal" onClick={(e) => this.nukeNote(e)}>Delete</button>
          </div>
        </div>
      </div>
    )
  }
}

export default ConfirmForm;
