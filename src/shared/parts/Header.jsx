import React, { Component, Fragment } from 'react';
import { Tween } from 'react-gsap';
import classNames from 'classnames';

import './Header.scss';

import Navigation from 'shared/navigation/Navigation';
import MobileNavigation from 'shared/navigation/MobileNavigation';
import CardpayLogo from 'shared/logo/Logo';
import {HEADER_LAYOUTS} from "../../utils/options";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      layout: props.layout || HEADER_LAYOUTS.sticky,
      vPosition: 'top',
    };

    this.onScroll = this.onScroll.bind(this);
  }

  componentDidMount() {
    this.setState({
      vPosition: window.pageYOffset > 100 ? 'bottom' : 'top',
    });
  }

  render() {
    return (
      <header
        className={classNames(
          'app-header',
          this.state.layout,
          this.props.out === 'out' ? 'out' : 'in',
          this.props.pages === true ? 'app-header-pages' : '',
          {
            'v-pos-top': this.state.layout === HEADER_LAYOUTS.secondaryPage && this.state.vPosition === 'top',
            'v-pos-bottom': this.state.layout === HEADER_LAYOUTS.secondaryPage && this.state.vPosition === 'bottom',
            'container px-0': this.state.layout === HEADER_LAYOUTS.secondaryPage && this.state.vPosition === 'top',
          },
        )}>
        <div className="app-header-inner container">
        <Tween from={{ y: -100 }} duration={0.25}>
          <div className="logo-wrapper">
            <CardpayLogo layout={this.state.layout} />
          </div>
        </Tween>

        <Tween from={{ y: -45 }} duration={0.25}>
          <div className="desktop-navigation">
            <Navigation showB2b={this.state.vPosition === 'bottom' || this.state.layout === 'sticky'} />
          </div>
        </Tween>

        <Tween from={{ y: -100 }} duration={0.25}>
          <div className="mobile-navigation">
            <MobileNavigation />
          </div>
        </Tween>

        { this.props.chapter && false &&
          <Fragment>
            <Tween from={{ y: -200 }} duration={0.25}>
              <div className="header-chapter">{this.props.chapter}</div>
            </Tween>
          </Fragment>
        }

        </div>
      </header>
    );
  }

  componentDidMount() {
    if (this.state.layout === HEADER_LAYOUTS.secondaryPage) {
      window.addEventListener('scroll', this.onScroll);
    }
  }

  componentWillUnmount() {
    if (this.state.layout === HEADER_LAYOUTS.secondaryPage) {
      window.removeEventListener('scroll', this.onScroll);
    }
  }

  onScroll() {
    const scrollTop = window.pageYOffset;
    const vPosition = this.state.vPosition;

    if (scrollTop > 100 && vPosition !== 'bottom') {
      this.setState({ vPosition: 'bottom' });
    } else if (scrollTop < 100 && vPosition !== 'top') {
      this.setState({ vPosition: 'top' });
    }
  }
}

export default Header;
