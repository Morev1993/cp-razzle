import React, { Component } from 'react';
import classNames from 'classnames';
import { withLocalize, Translate } from "react-localize-redux";
import {NavLink} from "react-router-dom";

import './BaseFooter.scss';
import translations from './translations';

import cookieNoticePDF from '../../../assets/pdf/CP_G_Cookie_Notice_V.02.pdf';
import privacyNoticePDF from '../../../assets/pdf/CP_G_Privacy_Notice_V.02.pdf';
import {FollowUs} from "../../../pages/blog/FollowUs/FollowUs";

class BaseFooter extends Component {
  static defaultProps = {
    containerClass: "",     
  };

  constructor(props) {
    super(props);

    this.props.addTranslation(translations);
  }

  render() {
    return (
      <footer
        className={classNames('base-footer', {
          'base-footer_only-text': !!this.props.isMenuHided,
          'base-footer_only-menu': !!this.props.isTextHided,
        })}
      >
        <div className="container">
          <div className="row">
            <div className={"col-12 col-md-8 col-lg-6 offset-md-1 order-2 order-lg-1 " + this.props.containerClass}>
              { !this.props.isMenuHided &&
                (<div className="base-footer-menu">
                <ul>
                  <li>
                    <NavLink to="/website-terms-of-use">
                      <Translate id="website-terms" />
                    </NavLink>
                  </li>
                </ul>
                <ul>
                  <li>
                    <a target="_blank" rel="noopener noreferrer" href={privacyNoticePDF}>
                      <Translate id="privacy-notice" />
                    </a>
                  </li>
                </ul>
                  <ul>
                    <li>
                      <a target="_blank" rel="noopener noreferrer" href={cookieNoticePDF}>
                        <Translate id="cookie-notice" />
                      </a>
                    </li>
                  </ul>
              </div>)}
              {!this.props.isTextHided && (
                <p>
                  <Translate id="copyright" />
                </p>
              )}
            </div>
            <div className="col-12 col-lg-4 order-1 order-lg-2">
               <FollowUs style={{ marginBottom: '30px' }} />
            </div>
          </div>
        </div>
      </footer>
    );
  }

}

export default withLocalize(BaseFooter);
