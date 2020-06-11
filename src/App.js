// NPM
import React, { Component } from 'react';

import { LocalizeProvider } from "react-localize-redux";

import Main from './main';

// SHARED
import './App.scss';

class App extends Component {
  render() {
    return (
      <LocalizeProvider>
        <Main />
      </LocalizeProvider>
    );
  }
}


export default App;
