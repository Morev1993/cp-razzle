import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Header from 'shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';

import './ApplyPage.scss';
import BaseFooter from "../../shared/parts/base-footer/BaseFooter";

import ApplyForm from '../../shared/apply-form-v2/ApplyForm';

import 'rc-dialog/assets/bootstrap.css';

class ApplyPage extends Component {


  render() {
    return (
      <div className="container typepage">
        <Helmet title="APPLY">
          <meta name="description" content="Contact Cardpay Sales Team to onboard today" />
        </Helmet>

        <Header layout={HEADER_LAYOUTS.secondaryPage} />
        <ApplyForm />

        <BaseFooter></BaseFooter>

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />

      </div>
    );
  }

}

export default ApplyPage;
