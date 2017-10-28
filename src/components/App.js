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
      this.loadSamples = this.loadSamples.bind(this);
      this.openModal = this.openModal.bind(this);
      this.closeModal = this.closeModal.bind(this);

    }
  addNote(note) {
    console.log('This is the note:', note);
    const notes = {...this.state.notes};
    const timestamp = Date.now();
    notes[`note${timestamp}`] = note
    this.setState({ notes });
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
        <Home addNote={this.addNote} showModal={this.state.showModal} closeModal={this.closeModal} notes={this.state.notes} />
      </div>
    )
  }
}

export default App;
