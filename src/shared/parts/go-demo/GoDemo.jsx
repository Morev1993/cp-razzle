import React, { Component } from 'react';

import { ReactComponent as Arrow } from 'assets/go-demo-arrow.svg';

import './GoDemo.scss';

import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";
import {environment} from "../../../environments";
import ReactGA from "react-ga";

class GoDemo extends Component {
  constructor(props) {
    super(props);
    this.props.addTranslation(translations);
  }

  goToDemo() {
    if (!!environment.gaId) {
      ReactGA.event({
        category: 'Home',
        action: 'GoDemo',
        value: 1
      });
    }

    window.location.href = 'https://demo.cardpay-test.com/ma/';
  }

  render() {
    return (
      <div className={`go-demo-button-wrapper ${this.props.currentSlide !== 1 ? 'top' : ''} ${this.props.currentSlide === 10 ? 'bottom' : ''}`}>
        <div className="optimised-for-desktop">
          <Translate id="optimized_desktop" />
        </div>
        <span onClick={this.goToDemo} className="btn btn-success btn-lg btn-go-demo">
          {/* <span className="button-arrow-wrapper"><Arrow /></span> */}
          <span className="button-text-wrapper">
            <Translate id="button" />
          </span>
        </span>
      </div>
    );
  }

}

export default withLocalize(GoDemo);
