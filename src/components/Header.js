import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className='bar'>
          <button className="add-samples gray MJButton" onClick={this.props.loadSamples}>Add Samples</button>
          <h2>Note-Note</h2>
          <button className="add-note teal MJButton" onClick={() => {this.props.openModal(null)}}>+ Add Note</button>
        </nav>
      </div>
    )
  }
}

export default Header;
