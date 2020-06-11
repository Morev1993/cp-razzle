import React, { Component } from 'react';

import Header from '../../../shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';
import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";

import './WebsiteTerms.scss';

export class WebsiteTerms extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="website-terms-page typepage container">
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
            <div className="website-terms-page__body">
              <div className="website-terms-page__caption">Website Terms of Use</div>

              <div className="mt-6">
                <div className="font-weight-bold text-center my-5">General Info</div>

                <p><b>1.1.</b> These Website Terms of Use are intended for those accessing or using www.cardpay.com (the "Website"), owned and maintained by Cardpay Ltd and Cardpay Companies ("Cardpay", "we" or "us")</p>

                <p><b>1.2.</b> Users are advised to read these Website Terms of Use before visiting or using the Website. The Website Terms of Use apply to the entire content of the Website including information, functions and services of Cardpay as the case may be.</p>

                <p><b>1.3.</b> Continued use of the Website and its services constitutes users' consent to be bound by the Website Terms of Use. If users do not wish to accept and be bound by the Website Terms of Use, they are advised to discontinue use of the Website, its information, functions and services.</p>

                <p><b>1.4.</b> The Website Terms of Use may be amended and changed without prior notice at the sole discretion of Cardpay. The effective version of the Website Terms of Use shall be available to the users at all times. Users' continued use of the Website shall imply awareness and acceptance of the amendments and changes.</p>

                <div className="font-weight-bold text-center my-5">Intellectual property rights</div>

                <p><b>2.1.</b> Unless otherwise explicitly stated, the copyright for the entire content of the Website including, but not limited to trade marks, logos, graphics, designs, texts, images, products and services offered by Cardpay, is the exclusive property of Cardpay.</p>

                <p><b>2.2.</b> Users may not modify, publish, reproduce, transmit, transfer, distribute, present or use the content of the Website in any other way for commercial purposes without prior written consent of Cardpay.</p>

                <p><b>2.3.</b> Users may copy, print and store information obtained from the Website for personal use only provided they comply with the following conditions:<br/>
                  - Such personal use must not violate third parties' intellectual property rights;<br/>
                  - The user clearly and distinctly acknowledges Cardpay as the source of information;<br/>
                  - The user explicitly states, if the information has been modified in any way.
                </p>

                <div className="font-weight-bold text-center my-5">User obligations</div>

                <p><b>3.1.</b> Users shall comply with the Website Terms of Use and the relevant regulations. The Website shall be used by Users for lawful purposes and in a way that does not limit or inhibit third parties' right to use the Website. In case User's actions lead to Cardpay's involvement in any litigation, imposition of fine, requirement to pay any kind of compensation or any other financial implications, such User shall compensate Cardpay accordingly. Users shall be liable in full for any damage to the Website caused by their inappropriate use of the Website, any of its information, functions and/or services.</p>

                <div className="font-weight-bold text-center my-5">Limitation of liability</div>

                <p><b>4.1.</b> Cardpay makes no representations or warranties regarding the Website and its content, including the Website's accuracy, completeness, availability, or timeliness. Information provided on the Website is subject to change and Cardpay disclaims any liability for omissions, deficiencies and errors, even in case of gross negligence.</p>

                <p><b>4.2.</b> In no event shall Cardpay be liable for any damages, including without limitation direct, indirect, special, incidental, consequential, punitive or exemplary damages, financial losses, expenses and lost profits, arising in connection with use of, inability to use and/or access the Website.</p>

                <p><b>4.3.</b> Users acknowledge that they act at their own discretion, at their own risk and on their own will and Cardpay assumes no responsibility for their actions. Under no circumstances shall any function, service and/or information available on/or via the Website be considered solicitation to conduct an investment, financial or any other transaction that have or may have a financial impact. The content of the Website does not constitute a legal, financial or any other advice or solicitation.</p>

                <div className="font-weight-bold text-center my-5">Governing law</div>

                <p><b>5.1</b> Use of the Website shall be governed by the applicable laws and regulations of the Republic of Cyprus. Any dispute or legal action arising out of or in connection with the website or the Website Terms of Use shall be settled in the competent courts of Cyprus.</p>

                <p><b>5.2</b> Invalidity or unenforceability of any provisions of the Website Terms of Use shall not affect validity and enforceability of the other provisions, which shall remain in full force and effect.</p>

                <div className="font-weight-bold text-center my-5">Links to third parties</div>

                <p><b>6.1.</b> The Website may contain links to third parties' websites. Cardpay disclaims any responsibility for the content of any third parties' websites and makes no representations and warranties regarding accuracy, timeliness, correctness or legality of information, functions and services provided by the third parties' websites. Cardpay does not endorse any products or services offered on/or via the third parties' websites. All content and functionality of the linked internet sites are the sole responsibility of respective third parties.
                </p>

                <p>Updated on 21.05.2019</p>
              </div>
            </div>
          </div>

          {/*<div className="col-12 col-md-3">
            <ul className="about-page__nav">
              <li className="my-3">
                <NavLink to='/about-company'>About Company</NavLink>
              </li>

              <li className="my-3 is-active">
                <span>Website Terms of Use</span>
              </li>
              <li className="my-3">
                <NavLink to='/documents'>Documents</NavLink>
              </li>
              <li className="my-3">
                <a href='https://www.cardpay.com/site/assets/files/1079/cp_privacy_notice_v_01.pdf' target="_blank" rel="noopener noreferrer">Privacy Notice</a>
              </li>
              <li className="my-3">
                <a href='https://www.cardpay.com/site/assets/files/1079/cp_cookie_notice_v_01.pdf' target="_blank" rel="noopener noreferrer">Cookie Notice</a>
              </li>
            </ul>
          </div>*/}
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
