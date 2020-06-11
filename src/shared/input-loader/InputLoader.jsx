import React, { Component } from 'react';

import './InputLoader.scss';
import { ReactComponent as Loader } from 'assets/loader.svg';



export default class InputLoader extends Component {
  render() {
    return (
      <div className="input-loader">
        <div className="input-loader__icon">
          <Loader/>
        </div>
      </div>
    );
  }
}
