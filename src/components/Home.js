import React, { Component } from 'react';
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
      <li key={key}>
        <span><h3>{note.title}</h3></span>
        <span>{note.description}</span>
      </li>
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
