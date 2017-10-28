import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import NoteDetail from './NoteDetail';
// import '../assets/Main.css';


// note: We are copying all of the props sent to main into Home
class Main extends Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' render={() => (
            <Home {...this.props} />
          )}/>
          <Route path='/note/:id' component={NoteDetail}/>
        </Switch>
      </main>
    )
  }
}

export default Main;
