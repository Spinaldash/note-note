import React, { Component } from 'react';

class NoteCard extends Component {
  render() {
    return(
      <li>
        <span><h3>{this.props.note.title}</h3></span>
        <span>{this.props.note.description}</span>
      </li>
    )
  }
}

export default NoteCard;
