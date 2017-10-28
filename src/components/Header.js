import React, { Component } from 'react';
import '../assets/Header.css';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className='bar'>
          <button className="add-samples mj-button" onClick={this.props.loadSamples}>Add Samples</button>
          <h3>Note-note App</h3>
          <button className="add-note mj-button">Add Note</button>
        </nav>
      </div>
    )
  }
}

export default Header;
