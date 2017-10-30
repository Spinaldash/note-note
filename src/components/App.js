import React, { Component } from 'react';
import '../assets/App.css';
import Header from './Header';
import Home from './Home';
import sampleNotes from '../assets/sample-notes';

class App extends Component {
  constructor() {
      super();
      this.state = {
        editNote: null,
        showConfirm: false,
        showModal: false,
        confirmId: null,
        notes: {},
      };
      this.addNote = this.addNote.bind(this);
      this.removeNote = this.removeNote.bind(this);
      this.loadSamples = this.loadSamples.bind(this);
      this.openModal = this.openModal.bind(this);
      this.openConfirm = this.openConfirm.bind(this);
      this.closeModal = this.closeModal.bind(this);
      this.closeConfirm = this.closeConfirm.bind(this);
    }
  addNote(note) {
    const notes = {...this.state.notes};
    // If the note comes bundled with an ID this is an edit of an exsisting note
    if(note.id) {
      notes[note.id] = note
    } else {
      const timestamp = Date.now();
      notes[`note${timestamp}`] = note
    }

    this.setState({ notes });
  }

  removeNote(noteKey) {
    const notes = { ...this.state.notes}
    if (notes[noteKey]) {
      delete notes[noteKey]
    } else {
      console.error('Tried to delete a not that does not exsist, key: ', noteKey);
    }
    this.setState({ notes })
  }

  openModal(editNoteKey = null) {
    // If an ID is given, find the note and add it to state
    let editNote = null;
    if(editNoteKey) {
      editNote = this.state.notes[editNoteKey]
      editNote.id = editNoteKey
    }
    this.setState({
      editNote: editNote,
      showModal: true
    });
  }

  openConfirm(id) {
    this.setState({
      showConfirm: true,
      confirmId: id
    })
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  closeConfirm() {
    this.setState({
      showConfirm: false
    })
  }

  loadSamples() {
    this.setState({
      notes: sampleNotes
    })
  }

  render() {
    return (
      <div className='app'>
        <Header loadSamples={this.loadSamples} openModal={this.openModal}/>
        <Home confirmId={this.state.confirmId} removeNote={this.removeNote} addNote={this.addNote}
          showConfirm={this.state.showConfirm} openConfirm={this.openConfirm} showModal={this.state.showModal}
          openModal={this.openModal} closeModal={this.closeModal} notes={this.state.notes}
          editNote={this.state.editNote} closeConfirm={this.closeConfirm}/>
      </div>
    )
  }
}

export default App;
