import React from 'react';
import ConfirmForm from './ConfirmForm';

class ConfirmModal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if(!this.props.show) {
      return null;
    }

    const highlightColor = this.props.color ? this.props.color :'#e74c3c';

    // The gray background
    const backdropStyle = {
      zIndex: 50,
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
      zIndex: 60,
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
          <ConfirmForm removeNote={this.props.removeNote} confirmId={this.props.confirmId} closeConfirm={this.props.closeConfirm} addNote={this.props.addNote}/>
        </div>
      </div>
    );
  }
}


export default ConfirmModal;
