import React, { Component } from 'react';

import { HEADER_LAYOUTS } from 'utils/options';
import Header from '../../../shared/parts/Header';
import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";
import {BankingIndustries} from "../BankingIndustries/BankingIndustries";
import {BankingHeading} from '../BankingHeading/BankingHeading'
import {BankingPerk} from '../BankingPerk/BankingPerk';
import ApplyForm from '../../../shared/apply-form-v2/ApplyForm';

import './BankingPage.scss';

import {NavLink} from "react-router-dom";
import {Helmet} from "react-helmet";

import translations from "../translations";
import {Translate, withLocalize} from "react-localize-redux";

export const BankingPage = withLocalize(class BankingPage extends Component {
  get industries1() {
    return [
      'Software & Web',
      'Game',
      'Mobile app',
      'SAAS',
    ];
  }

  get industries2() {
    return [
      'Robotics',
      'VR/AR',
      'Life science',
      'Medtech',
    ];
  }

  get industries3() {
    return [
      'Online platforms',
      'Advertisers & Publishers',
      'E-Commerce',
      'Startups',
    ];
  }

  constructor(props) {
    super(props);

    //this.props.loadPosts();
    this.props.addTranslation(translations);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="banking-page typepage">
        <Translate>
          {({ translate }) => (
            <Helmet title={translate('page-meta-title')}>
              <meta name="description" content="Open an IBAN multi-currency corporate account with Cardpay to manage your online payments" />
            </Helmet>
          )}
        </Translate>

        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        <div className="banking-page__bg banking-page__bg_case_main" style={{ marginTop: '100px' }}>
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-10 offset-md-1">
                <div className="banking-page__title" style={{ marginTop: '-105px' }}>
                  <Translate id="current_accounts"/>
                </div>

                <div className="banking-page__description">
                  <Translate id="current_accounts_description"/>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="container" style={{ marginTop: '130px', marginBottom: '100px' }}>
          <div className="row">
            <div className="col">
              <BankingHeading
                className="mx-auto"
                style={{ marginTop: '-210px', marginBottom: '50px' }}
              >
                <Translate id="offer.title"/>
              </BankingHeading>
            </div>
          </div>
          <div className="row">
            <div className="col-9 col-md-10 offset-md-1 banking-page__format">
              <div className="font-weight-bold">
                <Translate id="offer.text_1"/>
              </div>
              <div className="d-flex">
                <div>
                  <p>
                    <Translate id="offer.text_2"/>
                  </p>
                  <p>
                    <Translate id="offer.text_3"/>
                  </p>
                  <p>
                    <Translate id="offer.text_4"/>
                  </p>
                </div>
              </div>
            </div>
            <div className="col-3 col-md-1 banking-page__card-types ml-auto" style={{ marginTop: '-100px' }} />
          </div>
        </div>

        <div className="banking-page__bg banking-page__bg_case_perks mt-7">
          <div className="container">
            <div className="row">
              <div className="col">
                <BankingHeading className="mx-auto" style={{ marginTop: '-90px' }}>
                  <Translate id="perks.title"/>
                </BankingHeading>
              </div>
            </div>

            <div className="row">
              <div className="col-12 col-md-5 offset-md-1 mt-6">
                <BankingPerk num={1}>
                  <Translate id="perks.text_1"/>
                </BankingPerk>
              </div>
              <div className="col-12 col-md-4 offset-md-2 mt-6">
                <BankingPerk num={2}>
                  <Translate id="perks.text_2"/>
                </BankingPerk>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 offset-md-1 mt-6">
                <BankingPerk num={3}>
                  <Translate id="perks.text_3"/>
                </BankingPerk>
              </div>
              <div className="col-12 col-md-4 offset-md-2 mt-6">
                <BankingPerk num={4}>
                  <Translate id="perks.text_4"/>
                </BankingPerk>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-5 offset-md-1 mt-6">
                <BankingPerk num={5}>
                  <Translate id="perks.text_5"/>
                </BankingPerk>
              </div>
              <div className="col-12 col-md-4 offset-md-2 mt-6">
                <BankingPerk num={6}>
                  <Translate id="perks.text_6"/>
                </BankingPerk>
              </div>
            </div>
          </div>
        </div>

        <BankingHeading className="mx-auto mb-5" style={{ marginTop: '-85px' }}>
          <Translate id="industries.title"/>
        </BankingHeading>

        <Translate>
          {({ translate }) => (
            <BankingIndustries theme='dark-violet' items={this.industries1.map((item, i) => {
              return translate(`industries.text_1${i + 1}`)
            })} />
          )}
        </Translate>
        <Translate>
          {({ translate }) => (
            <BankingIndustries theme='violet' items={this.industries2.map((item, i) => {
              return translate(`industries.text_2${i + 1}`)
            })} />
          )}
        </Translate>
        <Translate>
          {({ translate }) => (
            <BankingIndustries theme='pink' items={this.industries3.map((item, i) => {
              return translate(`industries.text_3${i + 1}`)
            })} />
          )}
        </Translate>

        <div
          className="banking-page__bg banking-page__bg_case_form"
          style={{ marginTop: '90px', marginBottom: '30px' }}
        >
          <div className="container">
            <div className="row">
              <div className="col">
                <BankingHeading className="mx-auto mb-5" style={{ marginTop: '-90px' }}>
                  <Translate id="get_in_touch"/>
                </BankingHeading>
              </div>
            </div>

            <div className="row">
              <ApplyForm/>
            </div>
          </div>
        </div>

        <div className="container">
          <div className="row banking-page__documents">
            <div className="col-12 col-md-10 offset-md-1">
              <Translate id="refer"/> <NavLink to="/documents">https://www.cardpay.com/documents/</NavLink>
            </div>
          </div>
        </div>

        <BaseFooter />

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />
      </div>
    );
  }
});

