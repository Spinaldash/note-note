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
    this.props.addNote(note);
    this.noteForm.reset();
    this.props.closeModal();
  }

  render(){
    return(
      <form ref={(input) => this.noteForm = input} onSubmit={(e) => this.createNote(e)} >
        <div className="custom-radios">
          <div>
            <input type="radio" id="colorChoiceRed"
             name="color" value="#e74c3c" />
             <label htmlFor="colorChoiceRed"><span></span></label>

            <input type="radio" id="colorChoiceGreen"
             name="color" value="#2ecc71" />
             <label htmlFor="colorChoiceGreen"><span></span></label>

            <input type="radio" id="colorChoiceYellow"
             name="color" value="#dbb108" />
             <label htmlFor="colorChoiceYellow"><span></span></label>

            <input type="radio" id="colorChoiceBlue"
             name="color" value="#3498db" defaultChecked/>
             <label htmlFor="colorChoiceBlue"><span></span></label>
          </div>
        </div>
        <div>
          <input ref={(input) => this.title = input} id="title-input" type="text" placeholder="Untitled" autoFocus required/>
        </div>

        <textarea ref={(input) => this.description = input} placeholder="Just start typing here" cols="60" rows="25" required></textarea>
        <div className="footer-background">
          <div className="footer">
            <button className="MJButton gray" onClick={this.props.closeModal}>Cancel</button>
            <button className="MJButton teal" type="submit">Add</button>
          </div>
        </div>

      </form>
    )
  }
}

export default AddNoteForm;
