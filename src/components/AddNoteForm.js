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
    
    if(this.props.editNote) {
      note.id = this.props.editNote.id
    }

    this.props.addNote(note);
    this.noteForm.reset();
    this.props.closeModal();
  }


  render(){
    let [red, yellow, blue, green] = [false, false, false, false];
    const title = this.props.editNote ? this.props.editNote.title : ""
    const description = this.props.editNote ? this.props.editNote.description : ""
    if(this.props.editNote) {
      const color = this.props.editNote.color;
      // This seem ineffecient - noting to replace later
      switch(color) {
        case "#e74c3c":
          red = true;
          break;
        case "#2ecc71":
          green = true;
          break;
        case "#dbb108":
          yellow = true;
          break;
        case "#3498db":
          blue = true;
          break;
        default:
          break;
      }
    } else {
      blue = true;
    }
    return(
      <form ref={(input) => this.noteForm = input} onSubmit={(e) => this.createNote(e)} >
        <div className="custom-radios">
          <div>
            <input type="radio" id="colorChoiceRed"
             name="color" value="#e74c3c" defaultChecked={red}/>
             <label htmlFor="colorChoiceRed"><span></span></label>

            <input type="radio" id="colorChoiceGreen"
             name="color" value="#2ecc71" defaultChecked={green}/>
             <label htmlFor="colorChoiceGreen"><span></span></label>

            <input type="radio" id="colorChoiceYellow"
             name="color" value="#dbb108" defaultChecked={yellow}/>
             <label htmlFor="colorChoiceYellow"><span></span></label>

            <input type="radio" id="colorChoiceBlue"
             name="color" value="#3498db" defaultChecked={blue}/>
             <label htmlFor="colorChoiceBlue"><span></span></label>
          </div>
        </div>
        <div>
          <input ref={(input) => this.title = input} id="title-input" type="text" placeholder="Untitled" defaultValue={title} autoFocus required/>
        </div>

        <textarea ref={(input) => this.description = input} placeholder="Just start typing here" cols="60" rows="25" defaultValue={description} required></textarea>
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
