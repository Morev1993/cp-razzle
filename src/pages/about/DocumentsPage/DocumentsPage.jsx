import React, { Component } from 'react';

import Header from '../../../shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';
import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";

import './DocumentsPage.scss';

import pdf1 from '../../../assets/pdf/cp_tac_edition_01_01_09_2015.pdf';
import pdf4 from '../../../assets/pdf/cp_corporate_mc_fees-2.pdf';
import pdf5 from '../../../assets/pdf/CP_Corporate_MC_MDT_fees_EUR.pdf';
import pdf6 from '../../../assets/pdf/CP_Corporate_MC_MDT_fees_USD.pdf';
import pdf7 from '../../../assets/pdf/CP_Complaint_Handling_Policy.pdf';
import pdf8 from '../../../assets/pdf/cp_security_tips_v_01.pdf';
import pdf9 from '../../../assets/pdf/cp_complaint_form_v_01.pdf';
import pdf10 from '../../../assets/pdf/CP_CARD_T&C.pdf';
import pdf11 from '../../../assets/pdf/CP_FeesCharges_Standard_27.02.2020.pdf';

export class DocumentsPage extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);

  }

  render() {
    return (
      <div className="documents-page typepage container">
        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        <div className="row">
          <div className="col-12 col-md-1">
            {/*<div>
              <NavLink to="/about-company">
                <svg width="52" height="52" viewBox="0 0 52 52">
                  <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                    <circle cx="25" cy="25" r="25" fill="#FFF" stroke="#007AFF"/>
                    <path fill="#007AFF" fillRule="nonzero" d="M11.409 25.143l6.336 3.564-.49.872-8-4.5v-.872l8-4.5.49.872-6.336 3.564H40v1H11.409z"/>
                  </g>
                </svg>
              </NavLink>
            </div>*/}
          </div>

          <div className="col-12 col-md-10">
            <div className="documents-page__body">
              <div className="documents-page__caption">Documents</div>

              <div className="mt-6">
                <div className="font-weight-bold text-center my-5">Files to download:</div>

                <ul className="p-0">
                  <li><a href={pdf1}>Payment Account - Terms and Conditions</a></li>
                  <li><a href={pdf11}>Payment Account - Fees and Charges (in force from 27.02.2020)</a></li>
                  <li><a href={pdf10}>Card Terms and Conditions (in force from 15.10.2019)</a></li>
                  <li><a href={pdf4}>Corporate Prepaid MasterCard Card - Fees and Charges (in force from 25.01.2018)</a></li>
                  <li><a href={pdf5}>Corporate Mastercard Business Debit Card EUR - Fees and Charges (in force from 15.07.2019)</a></li>
                  <li><a href={pdf6}>Corporate Mastercard Business Debit Card USD - Fees and Charges (in force from 15.07.2019)</a></li>
                  <li><a href={pdf7}>Complaint Handling Policy</a></li>
                  <li><a href={pdf8}>Security Tips</a></li>
                  <li className="d-none"><a href={pdf9}>_</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        

        <BaseFooter />

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />
      </div>
    );
  }
}
