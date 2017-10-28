import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/App.css';
import Header from './Header';
import Main from './Main';
import sampleNotes from '../assets/sample-notes';

class App extends Component {
  constructor() {
      super();
      this.state = {
        notes: {},
      };
      // this.addNote = this.addNote.bind(this);
      this.loadSamples = this.loadSamples.bind(this);

    }

  loadSamples() {
    this.setState({
      notes: sampleNotes
    })
  }

  render() {
    return (
      <div>
        <Header loadSamples={this.loadSamples}/>
        <Main />
      </div>
    )
  }
}

export default App;
