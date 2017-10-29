import React, { Component } from 'react';
import '../assets/App.css';
import Header from './Header';
import Home from './Home';
import sampleNotes from '../assets/sample-notes';

class App extends Component {
  constructor() {
      super();
      this.state = {
        showModal: false,
        notes: {},
      };
      this.addNote = this.addNote.bind(this);
      this.removeNote = this.removeNote.bind(this);
      this.loadSamples = this.loadSamples.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);
    }
  addNote(note) {
    const notes = {...this.state.notes};
    const timestamp = Date.now();
    notes[`note${timestamp}`] = note
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

  openModal() {
    this.setState({
      showModal: true
    });
  }

  closeModal() {
    this.setState({
      showModal: false
    });
  }

  loadSamples() {
    this.setState({
      notes: sampleNotes
    })
  }

  render() {
    return (
      <div>
        <Header loadSamples={this.loadSamples} openModal={this.openModal}/>
        <Home removeNote={this.removeNote} addNote={this.addNote} showModal={this.state.showModal} closeModal={this.closeModal} notes={this.state.notes} />
      </div>
    )
  }
}

export default App;
