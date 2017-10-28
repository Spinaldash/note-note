import React, { Component } from 'react';

class AddFishForm extends Component {
  createNote(event) {
    event.preventDefault();
    const note = {
      title: this.title.value,
      description: this.description.value,
      color: this.color.value
    }
    this.props.addNote(note);
    this.noteForm.reset();
    this.props.closeModal();
  }
  render(){
    return(
      <form ref={(input) => this.noteForm = input} onSubmit={ (e) => this.createNote(e)} >
        <input ref={(input) => this.title = input} type="text" placeholder="Note Title"/>
        <input ref={(input) => this.description = input} type="textarea" placeholder="Note Description"/>
        <select ref={(input) => this.color = input}>
          <option value="blue">Blue</option>
          <option value="red">Red</option>
          <option value="yellow">Yellow</option>
        </select>
        <button type="submit">+ Add Note</button>
      </form>
    )
  }
}

export default AddFishForm;
