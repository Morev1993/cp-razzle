import React, { Component } from 'react';

import "./Copyright.scss";

export class Copyright extends Component {
  render() {
    return (
      <div className="copyright">
        <div className="container">
          <div className="row">
            <div className="col offset-md-1">
              © 2009-2020 Cardpay. All rights reserved. Cardpay, the logo and any associated brand names are Cardpay trademarks. All other trademarks are property of their respective owners.
            </div>
          </div>
        </div>
      </div>
    );
  }
}
