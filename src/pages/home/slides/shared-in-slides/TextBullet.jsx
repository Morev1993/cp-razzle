import React, { Component } from 'react';

import './TextBullet.scss';

class TextBullet extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bulletClass: 'text-bullet'
    };
  }

  render() {
    return (
      <div className={this.state.bulletClass}></div>
    );
  }

}

export default TextBullet;
