import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NoteDetail from './NoteDetail';
// import '../assets/Main.css';

const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/note/:id' component={NoteDetail}/>
    </Switch>
  </main>
)

export default Main;
