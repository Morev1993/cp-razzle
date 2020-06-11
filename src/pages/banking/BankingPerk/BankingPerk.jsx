import React, { Component } from 'react';
import classNames from 'classnames';

import './BankingPerk.scss';

export class BankingPerk extends Component {
  render() {
    return (
      <div className={classNames('banking-perk text-center text-md-left font-weight-md-bold', this.props.className)} style={this.props.style}>
        <div className="banking-perk__num">{this.props.num}</div>
        <div className="banking-perk__text">{this.props.children}</div>
      </div>
    );
  }
}
