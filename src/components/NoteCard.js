import React, { Component } from 'react';

class NoteCard extends Component {

  render() {

    const highlightColor = this.props.note.color ? this.props.note.color :'#e74c3c';

    const highlightStyle = {
      position: 'absolute',
      borderRadius: '5px 5px 0 0',
      top: 0,
      left: 0,
      height: '5px',
      width: '100%',
      backgroundColor: highlightColor
    };


    return(
      <span className="note-card">
        <div className='highlight' style={highlightStyle}></div>
        <div className="card-bar">
          <div><span className="card-title">{this.props.note.title}</span></div>
          <div className="icons">
            { /* <span className="icon-edit">E</span> */ }
            <span className="icon-delete" onClick={() => {this.props.openConfirm(this.props.noteId)}}>X</span>
          </div>
        </div>
        <div className="card-desc">
          <span>{this.props.note.description}</span>
        </div>
      </span>
    )
  }
}

export default NoteCard;
