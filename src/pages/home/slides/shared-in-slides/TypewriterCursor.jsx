import React, { Component } from 'react';

import './TypewriterCursor.scss'

class TypewriterCursor extends Component {

  constructor(props) {
    super(props);
    this.state = {
      typewriterClass: 'typewriter-cursor'
    };
  }

  render() {
    return (
      <div className={this.state.typewriterClass}></div>
    );
  }

}

export default TypewriterCursor;
