import React, { Component } from 'react';
import NoteCard from './NoteCard'
import Popup from './Popup'
// import '../assets/Home.css';

class Home extends Component {
  constructor() {
    super();
    this.renderNotes = this.renderNotes.bind(this);
  }

  renderNotes(key) {
    const note = this.props.notes[key]
    if (!note) {
      // skipping notes that are not found
      return
    }
    return (
      <NoteCard removeNote={this.props.removeNote} key={key} noteId={key} note={note}></NoteCard>
    )
  }

  render() {
    const noteKeys = Object.keys(this.props.notes)
    return (
      <div>
        <Popup addNote={this.props.addNote} show={this.props.showModal}
          closeModal={this.props.closeModal}>
        </Popup>
        <h2>Home Note Hub</h2>
        <ul className="note-container">
          {noteKeys.map(this.renderNotes)}
        </ul>
      </div>
    )
  }
}

export default Home;
