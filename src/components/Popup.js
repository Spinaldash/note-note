import React from 'react';
import AddNoteForm from './AddNoteForm';

class Popup extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    const highlightColor = this.props.color ? this.props.color :'#e74c3c';

    // The gray background
    const backdropStyle = {
      position: 'fixed',
      top: 0,
      bottom: 0,
      left: 0,
      right: 0,
      backgroundColor: 'rgba(0,0,0,0.3)',
      padding: 50
    };

    // The modal "window"
    const modalStyle = {
      backgroundColor: '#fff',
      borderRadius: 5,
      maxWidth: 500,
      minHeight: 300,
      margin: '0 auto',
      padding: '30px 30px 80px 30px',
      position: 'relative'
    };

    const highlightStyle = {
      position: 'absolute',
      borderRadius: '5px 5px 0 0',
      top: 0,
      left: 0,
      height: '10px',
      width: '100%',
      backgroundColor: highlightColor
    };

    const footerStyle = {
      position: 'absolute',
      borderRadius: '0 0 5px 5px',
      bottom: 0,
      left: 0,
      height: '',
      width: '100%',
      backgroundColor: '#a19999'
    }

    return (
      <div className="backdrop" style={backdropStyle}>
        <div className="modal" style={modalStyle}>
          <div className='highlight' style={highlightStyle}></div>
          <AddNoteForm closeModal={this.props.closeModal} addNote={this.props.addNote}/>
        </div>
      </div>
    );
  }
}


export default Popup;
