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
            <input type="radio" id="colorChoice1"
             name="color" value="red" />
             <label htmlFor="colorChoice1"><span></span></label>

            <input type="radio" id="colorChoice2"
             name="color" value="green" />
             <label htmlFor="colorChoice2"><span></span></label>

            <input type="radio" id="colorChoice3"
             name="color" value="yellow" />
             <label htmlFor="colorChoice3"><span></span></label>

            <input type="radio" id="colorChoice4"
             name="color" value="blue" defaultChecked/>
             <label htmlFor="colorChoice4"><span></span></label>
          </div>
        </div>
        <input ref={(input) => this.title = input} type="text" placeholder="Untitled" required/>
        <textarea ref={(input) => this.description = input} placeholder="Just start typing here" cols="60" rows="30" required></textarea>
        <button type="submit">+ Add Note</button>
      </form>
    )
  }
}

export default AddNoteForm;
