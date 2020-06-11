import React, { Component } from 'react';
import {withLocalize} from "react-localize-redux";

import './LangSwitch.scss';
import Dropdown from "rc-dropdown";
import Menu, { Item as MenuItem } from 'rc-menu';
import {LANGUAGE_STORAGE_KEY} from "../../../utils/options";
import {isIE, isEdge} from "../../../utils/helpers";
import {environment} from "../../../environments";
import ReactGA from "react-ga";

const classNames = require('classnames');

export const LangSwitch = withLocalize(class extends Component {
  constructor(props) {
    super(props);

    this.langSelect = React.createRef();
  }


  setActiveLanguage(code) {
    const { setActiveLanguage } = this.props;
    setActiveLanguage(code);

    try {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    } catch(e) {
      localStorage.setItem(LANGUAGE_STORAGE_KEY, code);
    }

    if (!!environment.gaId) {
      ReactGA.event({
        category: 'User',
        action: 'ChangeLanguage',
        label: code
      });
    }
  }

  render() {
    const { languages, activeLanguage = {} } = this.props;

    const languagesLayout = (
      <Menu
        className="cp-dropdown-menu"
        style={{ width: 140 }}
        activeKey={activeLanguage.code}
        selectable={false}
      >
        {languages.map(lang => (
          <MenuItem
            className="cp-dropdown-menu-item"
            key={lang.code}
            onClick={() => this.setActiveLanguage(lang.code)}
          >
            <div className={"navigation-link font-weight-normal " + (activeLanguage.code === lang.code && "active-link") }>
              {lang.name}
            </div>
          </MenuItem>
        ))}
      </Menu>
    );

    return (
      <div className={classNames("lang-switch", { ie: isIE() || isEdge()})} ref={this.langSelect}>
        <Dropdown
          getPopupContainer={() => this.langSelect.current}
          overlay={languagesLayout}
          openClassName="cp-dropdown-opened"
          placement="topRight"
        >
          <div className="lang-switch__current">
            <div className="lang-switch-code">{activeLanguage.code}</div>
          </div>
        </Dropdown>
      </div>
    );
  }
});
