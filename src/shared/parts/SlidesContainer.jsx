import React, { Component } from 'react';
import { Tween } from 'react-gsap';

import Navigation from 'shared/navigation/Navigation';
import CardpayLogo from 'shared/logo/Logo';
import ContactSales from 'shared/contact-sales/ContactSales';
import ScrollDown from 'shared/scroll-down/ScrollDown';

import './SlidesContainer.scss';

class SlidesContainer extends Component {

  render() {
    return (
      <div className="slides-container">

        <header className="slides-container--header">
          <Tween from={{ x: -120 }} duration={1.5}>
            <div><CardpayLogo /></div>
          </Tween>
          <Tween from={{ y: -100 }} duration={1.5}>
            <div><Navigation /></div>
          </Tween>
        </header>

        <footer className="slides-container--footer">
          <Tween from={{ y: 100 }} duration={1.5}>
            <div><ContactSales /></div>
          </Tween>
          <Tween from={{ y: 100 }} duration={3}>
            <div><ScrollDown /></div>
          </Tween>
          <Tween from={{ x: 300 }} duration={2}>
            <button className="btn btn-success btn-lg">Go Demo</button>
          </Tween>
        </footer>

      </div>
    );
  }

}

export default SlidesContainer;
