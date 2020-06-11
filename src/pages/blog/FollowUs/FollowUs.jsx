import React, { Component } from 'react';

import { ReactComponent as FbIcon } from 'assets/social_icons/fb.svg';
import { ReactComponent as InIcon } from 'assets/social_icons/in.svg';
import { ReactComponent as TwIcon } from 'assets/social_icons/twitter.svg';
import { ReactComponent as YouTubeIcon } from 'assets/social_icons/youtube.svg';

import './FollowUs.scss';

export class FollowUs extends Component {
  render() {
    return (
      <div className={'follow-us ' + this.props.className} style={this.props.style}>
        {/*<div className="follow-us__text text-center">Follow Us</div>*/}

        <div className="follow-us__links">
          <a href="https://twitter.com/Cardpay_Inc" target="_blank" rel="noopener noreferrer">
            <div className="follow-us__link mx-3">
              <TwIcon />
            </div>
          </a>
          <a href="https://www.facebook.com/CardpayPSP" target="_blank" rel="noopener noreferrer">
            <div className="follow-us__link mx-3">
              <FbIcon />
            </div>
          </a>
          <a href="https://www.linkedin.com/company/cardpay/" target="_blank" rel="noopener noreferrer">
            <div className="follow-us__link mx-3">
              <InIcon />
            </div>
          </a>
          <a href="https://www.youtube.com/c/cardpay" target="_blank" rel="noopener noreferrer">
            <div className="follow-us__link mx-3">
              <YouTubeIcon />
            </div>
          </a>
        </div>
      </div>
    );
  }
}
