import React, { Component } from 'react';
import classNames from 'classnames';

import './BankingHeading.scss';

export class BankingHeading extends Component {
  render() {
    return (
      <div className={classNames('banking-heading', this.props.className)} style={this.props.style}>
        <div className="banking-heading__text">{this.props.children}</div>
      </div>
    );
  }
}
