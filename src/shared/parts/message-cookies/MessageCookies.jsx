import React, { Component } from 'react';
import ModalMessageWrapper from '../ModalMessageWrapper';

import './MessageCookies.scss';

import cookieNoticePDF from '../../../assets/pdf/CP_G_Cookie_Notice_V.02.pdf';

import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";

class MessageCookies extends Component {

  constructor(props) {
    super(props);
    this.state = { confirmed: false };
    this.handleConfirm = this.handleConfirm.bind(this);
    this.props.addTranslation(translations);

  }

  componentDidMount() {
    let cookiesConfirmed = typeof localStorage !== 'undefined' && localStorage.getItem('cookiesConfirmed');
    this.setState({
      confirmed: cookiesConfirmed
    });
  }

  handleConfirm() {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('cookiesConfirmed', true);

      }
      this.setState({ confirmed: true });
    } catch(err) {
      this.setState({ confirmed: true });
    }
  }

  render() {
    return (
      <div>
        <ModalMessageWrapper>

          { !this.state.confirmed &&

            <div className="modal-message">
              <div className="container">
                <div className="row">
                  <div className="col-sm-8 col-md-10">
                    <div className="cookies-text">
                      <Translate id="text" />&nbsp;
                      <a href={cookieNoticePDF} target="_blank" rel="noopener noreferrer">
                        <Translate id="link" />
                      </a>. 
                    </div>
                  </div>
                  <div className="col-sm-4 col-md-2">

                    <button onClick={this.handleConfirm} className="btn btn-outline-success btn-cookies">
                      <Translate id="demo_button" />
                    </button>

                  </div>
                </div>
              </div>
            </div>

          }

        </ModalMessageWrapper>
      </div>
    )
  }
}

export default withLocalize(MessageCookies);
