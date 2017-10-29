import React, { Component } from 'react';
import '../assets/App.css';
import Header from './Header';
import Home from './Home';
import sampleNotes from '../assets/sample-notes';

class App extends Component {
  constructor() {
      super();
      this.state = {
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
        <Home confirmId={this.state.confirmId} removeNote={this.removeNote} addNote={this.addNote} showConfirm={this.state.showConfirm} openConfirm={this.openConfirm} showModal={this.state.showModal} closeModal={this.closeModal} notes={this.state.notes} closeConfirm={this.closeConfirm}/>
      </div>
    )
  }
}

export default App;
