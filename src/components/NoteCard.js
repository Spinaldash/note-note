import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    return(
      <span className="note-card">
        <ul className="card-bar">
          <li><span className="icon-edit">E</span></li>
          <li><span onClick={() => {this.props.removeNote(this.props.noteId)}} className="icon-delete">X</span></li>
        </ul>
        <span><h3>{this.props.note.title}</h3></span>
        <span>{this.props.note.description}</span>
      </span>
    )
  }
}

export default NoteCard;
