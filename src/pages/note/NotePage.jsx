import React from 'react';

import Header from 'shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';
import BaseFooter from "../../shared/parts/base-footer/BaseFooter";

import './NotePage.scss';

export default class NotePage extends React.Component {
  render() {
    return (
      <div className="typepage">
        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        <div className="container note-page">
          <div className="row mb-7">
            <div className="col-12 col-md-10 offset-md-1">
              <h1>Thank you for using our service!</h1>
            </div>
          </div>

          <div className="row note-page__data" style={{ marginBottom: '120px' }}>
            <div className="col-12 col-md-10 col-lg-8 offset-md-1 offset-lg-2">
              <p>If you have any questions or further suggestions please contact us</p>
              <p>Email: <a href="mailto:support@cardpay.com">support@cardpay.com</a></p>
              <p>Skype: <a href="skype:support.cardpay">support.cardpay</a></p>
            </div>
          </div>
        </div>

        <BaseFooter></BaseFooter>

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />
      </div>
    );
  }
}
