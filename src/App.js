import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import './App.css';
import Landing from './components/Landing';
import Library from './components/Library';
import Album from './components/album';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
        <img src="assets/images/bloc_jams_logo.png" alt="bloc jams logo"></img>
          <nav>
            <Link id="land" to='/'>Landing</Link>
            <Link id="lib" to='/library'>Library</Link>
          </nav>
        </header>
        <div className="underheader"></div>
        <main>
          <Route exact path="/" component={Landing} />
          <Route path="/Library" component={Library} />
          <Route path="/album/:slug" component={Album} />
        </main>
      </div>
    );
  }
}

export default App;
