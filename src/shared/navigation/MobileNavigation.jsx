import React, { Component } from 'react';
import MobileMenu from './MobileMenu';
import { NavLink } from 'react-router-dom';

import CardpayLogo from 'shared/logo/Logo';

import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";
import {LangSwitch} from "../parts/lang-switch/LangSwitch";

class MobileNavigation extends Component {

  constructor(props) {
    super(props);
    this.state = {
      on: false
    };

    this.toggleMenu = this.toggleMenu.bind(this);
    this.hideMenu = this.hideMenu.bind(this);

    this.props.addTranslation(translations);
  }

  toggleMenu() {
    const self = this;
    this.setState({ on: !this.state.on }, () => {
      this.timeout = setTimeout(() => {
        if (self.state.on) {
          self.mobileMenu.classList.add('show');
          self.overlay.classList.add('show');
        } else {
          // self.mobileMenu.classList.delete('show');
          // self.overlay.classList.delete('show');
        }
      }, 50);
    });
  }

  componentWillUnmount() {
    clearTimeout(this.timeout);
  }

  hideMenu() {
    this.setState({ on: false });
  }

  render() {
    return (
      <div className="mobile-navigation">
        <div onClick={this.toggleMenu} className="mobile-navigation-toggler">
          <Translate id="menu" />
        </div>
        { this.state.on &&

        <MobileMenu>
          <div className="mobile-navigation-menu-wrapper">


            <div ref={node => this.overlay = node} onClick={this.hideMenu} className="overlay-background" />


            <div ref={node => this.mobileMenu = node} className='mobile-menu'>

              <div className="row align-items-center">
                <div className="col-sm-6">
                  <div className="mobile-navigation-logo">
                    <CardpayLogo layout='base' />
                  </div>
                </div>
                <div className="col-sm-6">
                  <div className="mb-3">
                    <LangSwitch/>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-6">
                  <NavLink className="mobile-navigation-link" to="/developers">
                    <Translate id="developers" />
                  </NavLink>

                  <NavLink className="mobile-navigation-link" to="/about-company">
                    <Translate id="company.about" />
                  </NavLink>
                  <NavLink className="mobile-navigation-link" to="/blog">
                    <Translate id="company.blog" />
                  </NavLink>
                  <NavLink className="mobile-navigation-link" to="/careers">
                    <Translate id="company.careers" />
                  </NavLink>
                  <NavLink className="mobile-navigation-link" to="/contacts">
                    <Translate id="company.contacts" />
                  </NavLink>
                </div>

                <div className="col-6">
                  <NavLink className="mobile-navigation-link" to="/ibanking">
                    <Translate id="iBanking" />
                  </NavLink>
                  <NavLink className="mobile-navigation-link" to="/apply">
                    <Translate id="apply" />
                  </NavLink>
                  <p className="mobile-navigation-block"><Translate id="login" />:</p>
                  <a className="mobile-navigation-link" href="https://cardpay.com/ma/" rel="noopener noreferrer" target="_blank">Dashboard</a>
                  <a className="mobile-navigation-link" href="https://ibank.cardpay.com/?r=site/home" rel="noopener noreferrer" target="_blank" style={{ textTransform: 'initial' }}>iBank</a>
                </div>
              </div>
            </div>

          </div>
        </MobileMenu>
            
        }
      </div>
    );
  }

}

export default withLocalize(MobileNavigation);
