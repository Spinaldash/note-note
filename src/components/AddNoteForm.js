import React, { Component } from 'react';

class AddNoteForm extends Component {
  createNote(event) {
    event.preventDefault();
    // Because color is defined by a radio element it must be extracted differently
    const note = {
      title: this.title.value,
      description: this.description.value,
      color: this.noteForm.color.value
    }

    // If it's an edit we send an id to identify which note to change
    if(this.props.editNote) {
      note.id = this.props.editNote.id
    }

    this.props.addNote(note);
    this.noteForm.reset();
    this.props.closeModal();
  }

  amIDefault(color) {
    if(this.props.editNote) {
      if(color === this.props.editNote.color) {
        return true
      }
    } else {
      // setting default to red
      if(color === "#e74c3c") {
        return true
      }
    }
    return false
  }

  render(){

    // Setting defaults for the form if called in an edit
    let confirmButton = this.props.editNote ? 'Save' : 'Add';
    const title = this.props.editNote ? this.props.editNote.title : ""
    const description = this.props.editNote ? this.props.editNote.description : ""

    return(
      <form ref={(input) => this.noteForm = input} onSubmit={(e) => this.createNote(e)} >
        <div className="custom-radios">
          <div>
            <input type="radio" id="colorChoiceRed"
             name="color" value="#e74c3c" defaultChecked={this.amIDefault('#e74c3c')}/>
             <label htmlFor="colorChoiceRed"><span></span></label>

            <input type="radio" id="colorChoiceGreen"
             name="color" value="#2ecc71" defaultChecked={this.amIDefault('#2ecc71')}/>
             <label htmlFor="colorChoiceGreen"><span></span></label>

            <input type="radio" id="colorChoiceYellow"
             name="color" value="#dbb108" defaultChecked={this.amIDefault('#dbb108')}/>
             <label htmlFor="colorChoiceYellow"><span></span></label>

            <input type="radio" id="colorChoiceBlue"
             name="color" value="#3498db" defaultChecked={this.amIDefault('#3498db')  }/>
             <label htmlFor="colorChoiceBlue"><span></span></label>
          </div>
        </div>
        <div>
          <input ref={(input) => this.title = input} id="title-input" type="text" placeholder="Untitled" defaultValue={title} size='50' autoFocus required/>
        </div>

        <textarea ref={(input) => this.description = input} placeholder="Just start typing here" cols="60" rows="25" defaultValue={description} required></textarea>
        <div className="footer-background">
          <div className="footer">
            <button className="MJButton gray" onClick={this.props.closeModal}>Cancel</button>
            <button className="MJButton teal" type="submit">{confirmButton}</button>
          </div>
        </div>

      </form>
    )
  }
}

export default AddNoteForm;
