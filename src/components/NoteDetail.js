import React, { Component } from 'react';
import logo from '../assets/logo.svg';
// import '../assets/NoteDetail.css';

const NoteDetail = (props) => {
  const noteId = props.match.params.id
  return (
    <div>
      <h3>Note Number {noteId}</h3>
      <h3>Note Details</h3>
      <h3>Note Details</h3>
      <h3>Note Details</h3>
    </div>
  )
}

export default NoteDetail;
