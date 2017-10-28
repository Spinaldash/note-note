import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../assets/Header.css';

const Header = () => (
  <div>
    <nav className='bar'>
      <div class="icon icon-1"></div>
      <h3>Note-note App</h3>
      <button className="add-button">Add Note</button>
    </nav>
  </div>
)

export default Header;
