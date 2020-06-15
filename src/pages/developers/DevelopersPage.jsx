import React, { Component } from 'react';
import { HEADER_LAYOUTS } from 'utils/options';
import Header from 'shared/parts/Header';

import './DevelopersPage.scss';
import BaseFooter from "../../shared/parts/base-footer/BaseFooter";
import {Helmet} from "react-helmet";

import translations from "./translations.json";
import {Translate, withLocalize} from "react-localize-redux";

class DevelopersPage extends Component {
  constructor(props) {
    super(props);

    this.gotoAnchor = this.gotoAnchor.bind(this);

    this.props.addTranslation(translations);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  gotoAnchor(e) {
    const href = e.target.href;

    const currentId = window.location.hash;
    const nextId = href.slice(href.indexOf('#') + 1);

    const elem = document.querySelector(`#${nextId}`);
    elem.scrollIntoView();

    e.preventDefault();

    if (currentId !== `#${nextId}`) {
      window.history.pushState(null, '', `#${nextId}`);
    }

    elem.classList.add('is-active');
    setTimeout(() => elem.classList.remove('is-active'), 2000)
  }

  render() {
    return (
      <div className="typepage">
        <Translate>
          {({ translate }) => (
            <Helmet title={translate('page-meta-title')}>
              <meta name="description" content="Major steps for Cardpay sandbox integration" />
            </Helmet>
          )}
        </Translate>

        <Header
          layout={HEADER_LAYOUTS.secondaryPage}
        />

        <div className="container developers-page__body">
          <div className="row justify-content-between">
            <div className="offset-md-1 col mr-2">
              <h1 className="developers-page__title m-0">
                <Translate id="page-title"/>
              </h1>
            </div>
            <div className="offset-md-1 col d-flex align-items-center justify-content-end">
              <ul className="list-unstyled developers-menu">
                <li className="d-none d-lg-block">
                  <a href="#api" onClick={this.gotoAnchor}>
                    <Translate id="menu.api"/>
                  </a>
                </li>
                <li className="d-none d-lg-block">
                  <a href="#solutions" onClick={this.gotoAnchor}>
                    <Translate id="menu.solutions"/>
                  </a>
                </li>
                <li className="d-none d-lg-block">
                  <a href="#support" onClick={this.gotoAnchor}>
                    <Translate id="menu.support"/>
                  </a>
                </li>
                <li>
                  <a href="https://cardpay.atlassian.net/wiki/spaces/SUP/pages/144343041/FAQ" target="_blank" rel="noopener noreferrer">
                    <Translate id="menu.help"/>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="row" style={{ marginTop: '50px' }}>
            <div className="col-12 col-md-9 offset-md-2">
              <p>
                <Translate id="description.integration_process_title"/>
              </p>
              <p>
                <Translate id="description.integration_process_title_text"/>
              </p>
            </div>
          </div>

          {/*<div className="row" style={{ marginTop: '80px' }}>
            <div className="col moseratbold text-center">Step 1</div>
          </div>*/}

          <div className="row" style={{ marginTop: '50px' }}>
            <div className="col-12 col-md-9 offset-md-2 text-uppercase">
              <Translate id="description.sandbox.title"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">1</div>
            <div className="col-12 col-md-9">
              <Translate id="description.sandbox.text_1"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">2</div>
            <div className="col-12 col-md-9">
              <Translate id="description.sandbox.text_2"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">3</div>
            <div className="col-12 col-md-9">
              <Translate id="description.sandbox.text_3"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">4</div>
            <div className="col-12 col-md-9">
              <Translate id="description.sandbox.text_4"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">5</div>
            <div className="col-12 col-md-9">
              <Translate id="description.sandbox.text_5"  options={{ renderInnerHtml: true }}/>
            </div>
          </div>

          {/*<div className="row" style={{ marginTop: '80px' }}>
            <div className="col moseratbold text-center">Step 2</div>
          </div>*/}

          <div className="row" style={{ marginTop: '80px' }}>
            <div className="col-12 col-md-9 offset-md-2 text-uppercase">
              <Translate id="description.live.title"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">1</div>
            <div className="col-12 col-md-9">
              <Translate id="description.live.text_1"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">2</div>
            <div className="col-12 col-md-9">
              <Translate id="description.live.text_2"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">3</div>
            <div className="col-12 col-md-9">
              <Translate id="description.live.text_3"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">4</div>
            <div className="col-12 col-md-9">
              <Translate id="description.live.text_4"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">5</div>
            <div className="col-12 col-md-9">
              <Translate id="description.live.text_5"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">6</div>
            <div className="col-12 col-md-9">
              <Translate id="description.live.text_6" options={{ renderInnerHtml: true }}/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic">7</div>
            <div className="col-12 col-md-9">
              <Translate id="description.live.text_7"/>
            </div>
          </div>

          <div className="row" style={{ marginTop: '80px' }} >
            <div className="col-12 col-md-9 offset-md-2 text-uppercase">
              <div id="api" className="section-heading">
                <Translate id="menu.api"/>
              </div>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic"></div>
            <div className="col-12 col-md-9">
              <a href="https://integration.cardpay.com" target="_blank" rel="noopener noreferrer">https://integration.cardpay.com</a>
            </div>
          </div>

          <div className="row" style={{ marginTop: '80px' }}>
            <div className="col-12 col-md-9 offset-md-2 text-uppercase">
              <div id="solutions" className="section-heading">
                <Translate id="menu.solutions"/>
              </div>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="col-12 col-md-9 offset-md-2">
              <Translate id="description.solutions.text"/>
            </div>
          </div>

          <div className="step-list-item row">
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic"></div>
            <div className="col-12 col-md-9 d-flex">
              <div className="mr-6">
                <a href="https://github.com/cardpay/java-sdk-v3" target="_blank" rel="noopener noreferrer">Java SDK</a>
              </div>
              <div className="mr-6">
                <a href="https://github.com/cardpay/php-sdk-v3" target="_blank" rel="noopener noreferrer">PHP SDK</a>
              </div>
              <div>
                <a href="https://github.com/cardpay/python-sdk-v3" target="_blank" rel="noopener noreferrer">Python SDK</a>
              </div>
            </div>
          </div>

          <div className="row" style={{ marginTop: '80px' }}>
            <div className="col-12 col-md-9 offset-md-2 text-uppercase">
              <div id="support" className="section-heading">
                <Translate id="contacts_text"/>
              </div>
            </div>
          </div>

          <div className="step-list-item row" style={{ marginBottom: '50px' }}>
            <div className="step-list-item__number d-none d-md-block col-1 offset-1 font-italic"></div>
            <div className="col-12 col-md-9">
              <div className="icon-email"><a href="mailto:support@cardpay.com">support@cardpay.com</a></div>
            </div>
          </div>
        </div>

        <BaseFooter></BaseFooter>

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />
      </div>
    );
  }

}

export default withLocalize(DevelopersPage);
