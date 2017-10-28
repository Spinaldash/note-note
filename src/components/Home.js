import React, { Component } from 'react';
import NoteCard from './NoteCard'
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
      <NoteCard key={key} note={note}></NoteCard>
    )
  }

  render() {
    const noteIds = Object.keys(this.props.notes)
    return (
      <div>
        <h2>Home Note Hub</h2>
        <ul className="note-index">
          {noteIds.map(this.renderNotes)}
        </ul>
      </div>
    )
  }
}

export default Home;
