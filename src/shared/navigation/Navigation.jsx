import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Navigation.scss';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

import { LangSwitch } from '../parts/lang-switch/LangSwitch';

import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";

const companyMenu = (
  <Menu className="cp-dropdown-menu" selectable={false}>
    <MenuItem className="cp-dropdown-menu-item">
      <NavLink activeClassName="active-link" to="/about-company" className="navigation-link font-weight-normal">
        <Translate id="company.about" />
      </NavLink>
    </MenuItem>
    <MenuItem className="cp-dropdown-menu-item">
      <NavLink activeClassName="active-link" to="/blog" className="navigation-link font-weight-normal">
        <Translate id="company.blog" />
      </NavLink>
    </MenuItem>
    <MenuItem className="cp-dropdown-menu-item">
      <NavLink activeClassName="active-link" to="/careers" className="navigation-link font-weight-normal">
        <Translate id="company.careers" />
      </NavLink>
    </MenuItem>
    <MenuItem className="cp-dropdown-menu-item">
      <NavLink activeClassName="active-link" className="navigation-link font-weight-normal" to="/contacts">
        <Translate id="company.contacts" />
      </NavLink>
    </MenuItem>
  </Menu>
);


const loginMenu = (
  <Menu className="cp-dropdown-menu" selectable={false}>
    <MenuItem className="cp-dropdown-menu-item">
      <a href="https://cardpay.com/ma/" rel="noopener noreferrer" target="_blank" className="font-weight-normal">
        <Translate id="dashboard" />
      </a>
    </MenuItem>
    <MenuItem className="cp-dropdown-menu-item">
      <a href="https://ibank.cardpay.com/?r=site/home" rel="noopener noreferrer" target="_blank" className="font-weight-normal" style={{ textTransform: 'initial' }}>iBANK</a>
    </MenuItem>
  </Menu>
);

class Navigation extends Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(translations);
    this.navRef = React.createRef();
  }

  render() {
    return (
      <div className="navigation" ref={this.navRef}>
        <NavLink activeClassName="active-link" className="navigation-link text-center" to="/developers">
          <Translate id="developers" />
        </NavLink>
        <Dropdown
          getPopupContainer={() => this.navRef.current}
          overlay={companyMenu}
          openClassName="cp-dropdown-opened"
          placement="topCenter"
        >
          <NavLink activeClassName="active-link" className="navigation-link text-center" to="/about-company">
            <Translate id="company.company" />
          </NavLink>
        </Dropdown>

        {this.props.showB2b && (
          <a className="navigation-link text-center" href="https://www.b2bcard.com/" rel="noopener noreferrer" target="_blank">
            <Translate id="b2b_card" />
          </a>
        )}

        <NavLink activeClassName="active-link" className="navigation-link text-center" to="/ibanking">
          <Translate id="iBanking" />
        </NavLink>

        <NavLink activeClassName="active-link" className="navigation-link font-weight-bold text-center" to="/apply">
          <Translate id="apply" />
        </NavLink>
        <Dropdown
          getPopupContainer={() => this.navRef.current}
          overlay={loginMenu}
          openClassName="cp-dropdown-opened"
          placement="topCenter"
        >
          <span className="navigation-link login">
            <Translate id="login" />
          </span>
        </Dropdown>

        <LangSwitch/>

      </div>
    );
  }

}

export default withLocalize(Navigation);
