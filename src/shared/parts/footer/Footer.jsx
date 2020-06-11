import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tween } from 'react-gsap';
import './Footer.scss';

import Scroll from 'shared/scroll-down/Scroll';

import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      button_from: { x: 300 },
      button_to:   { x: 0 },
    };

    this.props.addTranslation(translations);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.slideTo === 3) {
      return {
        playState: 'play',
        duration: 1,
        button_from: { y: '0px'},
        button_to: { y: '-100px'},
      };
    } else if (nextProps.slideFrom === 3)  {
      return {
        playState: 'reverse',
        animate: 'out',
        duration: 0.15,
        button_from: { y: '100px'},
        button_to: { y: '0px'},
      };
    } else {
      return {};
    }
  }

  render() {
    return (
      <footer className={`app-footer container`}>

        <Tween from={{ y: 100 }} duration={1.5}>
          <a href="/apply" className={`contact-sales ${this.props.slideTo === 1 ? 'upper' : this.props.slideTo === 11 ? 'hidden' : ''}`}>
            <span className="link-hover">
              <Translate id="contact_us" />
            </span>
          </a>
        </Tween>

        <div className={`scroll-down--wrapper ${this.props.slideTo === 1 ? 'down' : 'up'}`}>

          <div className="scroll-down-icon">
            <Scroll/>
          </div>

          <div className="pt-2 scroll-text">
            <span className="scroll-text--mobile">
              <Translate id="scroll_mobile" />
            </span>
            <span className="scroll-text--desktop">
              <Translate id="scroll_desktop" />
            </span>
          </div>

        </div>


      </footer>
    );
  }

}

Footer.propTypes = {
  slideFrom: PropTypes.number,
  slideTo: PropTypes.number,
};

export default withLocalize(Footer);
