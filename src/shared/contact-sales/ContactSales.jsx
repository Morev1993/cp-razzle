import React, { Component } from 'react';
import './ContactSales.scss';
import { ReactComponent as ContactSalesIcon } from 'assets/icon_contact_sales_white.svg';

import { Tween, SplitLetters } from 'react-gsap';

class ContactSales extends Component {

  constructor(props) {
    super(props);

    this.state = {
      hover: false,
      playState: 'stop'
    }

    this.mouseEnterHandler = this.mouseEnterHandler.bind(this);
    this.mouseLeaveHandler = this.mouseLeaveHandler.bind(this);
  }

  mouseEnterHandler() {
    this.setState({ playState: 'play', hover: true });
  }

  mouseLeaveHandler() {
    this.setState({ playState: 'reverse', hover: false });
  }

  render() {
    return (
      <div className={`contact-sales-link ${this.state.hover ? 'contact-sales-link--hover' : ''}`} onMouseLeave={this.mouseLeaveHandler} >

        <span className="contact-sales" onMouseEnter={this.mouseEnterHandler} >
          <span className="icon-wrapper">
            <ContactSalesIcon />
          </span>
        </span>

        <span className="contact-sales--text">
          <Tween
            playState={ this.state.playState }
            staggerTo={ {opacity: '1'} }
            stagger={0.02}
            duration={0.05}
            ease="Elastic.easeOut"
          >
            <SplitLetters><span className="contact-sales--letters">Contact&nbsp;Sales</span></SplitLetters>
          </Tween>
        </span>

      </div>
    );
  }

}

export default ContactSales;
