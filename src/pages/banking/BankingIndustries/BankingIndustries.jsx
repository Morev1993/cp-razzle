import React, { Component } from 'react';
import classNames from 'classnames';

import './BankingIndustries.scss';

export class BankingIndustries extends Component {
  get items() {
    return this.props.items || [];
  }

  render() {
    return (
      <div
        className={classNames('banking-industries', {
          'banking-industries_theme_dark-violet': this.props.theme === 'dark-violet',
          'banking-industries_theme_violet': this.props.theme === 'violet',
          'banking-industries_theme_pink': this.props.theme === 'pink',
        })} style={this.props.style}
      >
        <div className="container p-0 h-100">
          <div className="row h-100">

            {this.items.map((item, idx) => (
              <div
                key={idx}
                className="col-12 col-md-6 col-lg-3 d-flex align-items-center justify-content-center h-100"
                style={{ marginBottom: '40px' }}
              >
                <div className="text-center" style={{ width: '200px' }}>{item}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
