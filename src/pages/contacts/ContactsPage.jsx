import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Header from 'shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';

import './ContactsPage.scss';
import BaseFooter from "../../shared/parts/base-footer/BaseFooter";

import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";

class ContactsPage extends Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(translations);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="typepage">
        <Translate>
          {({ translate }) => (
            <Helmet title={translate('page-meta-title')}>
              <meta name="description" content="Cardpay has offices in  Europe, Asia, the US and Latin America" />
            </Helmet>
          )}
        </Translate>

        <div className="">
          <div className="container">

            <Header layout={HEADER_LAYOUTS.secondaryPage} />
            <div className="row">
              <div className="contacts-header d-block d-md-flex col-12 col-md-10">
                <h1>
                  <Translate id="page-title"/>
                </h1>
                {/*<div>
                  <a href="mailto:hello@cardpay.com">hello@cardpay.com</a>
                </div>*/}
              </div>
            </div>
          </div>

          <div className="container contacts-body">
            <div className="row">
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>2 Seething Lane, 7th Floor, London, EC3N 4AT,</div>
                  <p><b>United Kingdom</b></p>

                  <div>
                    <a className="d-block" href="mailto:europe@cardpay.com">europe@cardpay.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>
                    <div>Georgiou Griva Digeni 125, <br/>3101, Limassol,</div>
                    <p><b>Cyprus</b></p>
                  </div>
                  <div>
                    <a className="d-block" href="mailto:europe@cardpay.com">europe@cardpay.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>
                    <div>2033 Gateway Place,<br/>Suite 500, San Jose, CA 95110, </div>
                    <p><b>USA</b></p>
                  </div>
                  <div>
                    <a className="d-block" href="mailto:usa@cardpay.com">usa@cardpay.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>Unit 507, 5/F, Chinachem Golden Plaza,<br/>77 Mody Road, Tsim Sha Tsui East, Kowloon,</div>
                  <p><b>Hong Kong</b></p>

                  <div>
                    <a className="d-block" href="mailto:asia@cardpay.com">asia@cardpay.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>
                    <div>11F, Carlton Building, No. 21 Huanghe Road,<br/>Huangpu District, Shanghai,</div>
                    <p><b>China</b></p>
                  </div>
                  <div>
                    <a className="d-block" href="mailto:asia@cardpay.com">asia@cardpay.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>
                    <div>Office 2406, No. 166,<br/>Eastern Tapu Road, Xiamen,</div>
                    <p><b>China</b></p>
                  </div>
                  <div>
                    <a className="d-block" href="mailto:asia@cardpay.com">asia@cardpay.com</a>
                  </div>
                </div>
              </div>
            </div>
                
            <div className="row">
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>Office 511,<br/>Spaces Clarke Quay, 58267,</div>
                  <p><b>Singapore</b></p>

                  <div>
                    <a className="d-block" href="mailto:asia@cardpay.com">asia@cardpay.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>
                    <div>Office 1622, 16th floor 360<br/>Kim Ma Street, Hanoi,</div>
                    <p><b>Vietnam</b></p>
                  </div>
                  <div>
                    <a className="d-block" href="mailto:asia@cardpay.com">asia@cardpay.com</a>
                  </div>
                </div>
              </div>
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>
                    <div>Paseo de la Reforma 296,<br/>Juarez, 06600, Ciudad de Mexico,</div>
                    <p><b>Mexico</b></p>
                  </div>
                  <div>
                    <a className="d-block" href="mailto:latam@cardpay.com">latam@cardpay.com</a>
                  </div>
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-sm-4 col-12 contact-item">
                <div>
                  <div>Av. Paulista 171,<br/>4th floor, Bela Vista, Sao Paolo,</div>
                  <p><b>Brazil</b></p>

                  <div>
                    <a className="d-block" href="mailto:latam@cardpay.com">latam@cardpay.com</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BaseFooter containerClass="ml-0"></BaseFooter>

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />

      </div>
    );
  }

}

export default withLocalize(ContactsPage);
