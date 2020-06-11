import React, { Component } from 'react';
import { HEADER_LAYOUTS } from 'utils/options';
import {Helmet} from "react-helmet"
import { withLocalize, Translate } from "react-localize-redux";

import Header from '../../../shared/parts/Header';
import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";

import img1x1 from '../../../assets/about/001@1x.png';
import img1x2 from '../../../assets/about/001@2x.png';
import img2x1 from '../../../assets/about/002@1x.png';
import img2x2 from '../../../assets/about/002@2x.png';
import img3x1 from '../../../assets/about/003@1x.png';
import img3x2 from '../../../assets/about/003@2x.png';
import img4x1 from '../../../assets/about/004@1x.png';
import img4x2 from '../../../assets/about/004@2x.png';

/*import company1 from '../../../assets/about/company1.png';
import company2 from '../../../assets/about/company2.png';
import company3 from '../../../assets/about/company3.png';
import company4 from '../../../assets/about/company4.png';
import company5 from '../../../assets/about/company5.png';
import company6 from '../../../assets/about/company6.png';*/

import './AboutPage.scss';
import translations from "./translations";

export const AboutPage = withLocalize(class extends Component {
  constructor(props) {
    super(props);

    this.props.addTranslation(translations);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="typepage typepage_footer_only-text overflow-hidden">
        <Translate>
          {({ translate }) => (
            <Helmet title={translate('page-meta-title')}>
              <meta name="description" content="Cardpay is a global ecommerce acquirer offering an all-in-one online payments dashboard with a wide range of international and local payment solutions" />
            </Helmet>
          )}
        </Translate>

        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        <div className="about-page container">
          <div className="row align-items-center">
            <div className="about-page__title col-12 col-md-6 offset-md-1 order-2 order-md-1 mt-7 mt-md-0">
              <Translate id="page-title" />
            </div>
            <div className="about-page__email col-12 col-md-3 offset-md-2 text-center text-md-right order-1 order-md-2">
              <a href="mailto:hello@cardpay.com">hello@cardpay.com</a>
            </div>
          </div>

          <div className="row custom-offset-3" style={{ marginBottom: '50px' }}>
            <div className="about-page__title col-12 col-md-9 offset-md-1">
              <Translate id="description.our-mission" />
            </div>
          </div>

          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-2 col-md-1 offset-md-1 about-page__advantage-circle" />
            <div className="about-page__advantage col-10 col-md-5">
              <Translate id="description.cardpay-is-global" />
            </div>
          </div>
        </div>

        <div className="about-page bg-hover custom-offset-2">
          <div className="container">
            <div className="row">
              <div className="about-page__number col-12 col-md-3">
                <div className="about-page__number-cont">
                  <span>2009</span>
                  <p>
                    <Translate id="numbers.launched" />
                  </p>
                </div>
              </div>
              <div className="about-page__number col-12 col-md-3">
                <div className="about-page__number-cont">
                  <span>10</span>
                  <p>
                    <Translate id="numbers.global-offices" />
                  </p>
                </div>
              </div>
              <div className="about-page__number col-12 col-md-3">
                <div className="about-page__number-cont">
                  <span>300+</span>
                  <p>
                    <Translate id="numbers.payment-methods" />
                  </p>
                </div>
              </div>
              <div className="about-page__number col-12 col-md-3">
                <div className="about-page__number-cont">
                  <span>24+</span>
                  <p>
                    <Translate id="numbers.nationalities" />
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-page container">
          <div className="row">
            <div className="col-2 col-md-1 offset-md-1 about-page__advantage-circle" />
            <div className="about-page__advantage col-10 col-md-5">
              <Translate id="description.with-cardpay" />
            </div>
          </div>

          <div className="row" style={{ marginTop: '84px' }}>
            <div className="about-page__big-text about-page__big-text_weight_heavy col-12 col-md-10 offset-md-1">
              <Translate id="description.an-agile" />
            </div>
          </div>

          <div className="row" style={{ marginTop: '44px' }}>
            <div className="about-page__big-text about-page__big-text_weight_medium col-12 col-md-10 offset-md-1">
              <Translate id="description.state-of-the-art" />
            </div>
          </div>

          <div className="row" style={{ marginTop: '44px' }}>
            <div className="about-page__big-text about-page__big-text_weight_light col-12 col-md-10 offset-md-1">
              <Translate id="description.wide-range" />
            </div>
          </div>
        </div>

        {/*<div className="about-page bg-gray" style={{ marginTop: '100px' }}>
          <div className="container">
            <div className="row">
              <div className="col d-flex justify-content-between align-items-center flex-wrap">
                <div className="py-4"><img src={company1} alt="" /></div>
                <div className="py-4"><img src={company2} alt="" /></div>
                <div className="py-4"><img src={company3} alt="" /></div>
                <div className="py-4"><img src={company4} alt="" /></div>
                <div className="py-4"><img src={company5} alt="" /></div>
                <div className="py-4"><img src={company6} alt="" /></div>
              </div>
            </div>
          </div>
        </div>*/}

        <div className="about-page container">
          <div className="row custom-offset-1">
            <div className="about-page__title col-12 col-md-10 offset-md-1">
              <Translate id="description.we-bring" />
            </div>
          </div>

          <div className="row" style={{ marginTop: '40px' }}>
            <div className="col-2 col-md-1 offset-md-1 about-page__advantage-circle" />
            <div className="about-page__advantage col-10 col-md-5">
              <Translate id="description.cardpay-is-taking" />
            </div>
          </div>
        </div>

        <div className="about-page bg-hover-half">
          <div className="container">
            <div className="row">
              <div className="about-page__title col-10 offset-1 mt-5 mb-md-5 order-2 order-md-1 text-center text-md-left">
                <Translate id="developer-friendly.title" />
              </div>

              <div className="col-md-4 offset-md-1 text-center text-md-left order-3 order-md-2 mt-5 mt-md-0">
                <ul className="about-page__list">
                  <Translate
                    id="developer-friendly.items"
                    options={{ renderInnerHtml: true }}
                  />
                </ul>
              </div>
              <div className="about-page__img col-12 col-md-3 text-center text-md-left order-1 order-md-3">
                <img src={img4x1} srcSet={`${img4x2} 2x`} alt="" />
              </div>
            </div>
          </div>

          <div className="container custom-offset-1">
            <div className="row">
              <div className="about-page__title col-10 offset-1 mt-5 mb-md-5 order-2 order-md-1 text-center text-md-left">
                <Translate id="verification.title" />
              </div>
              <div className="col-md-4 offset-md-1 text-center text-md-left order-3 order-md-2 mt-5 mt-md-0">
                <ul className="about-page__list">
                  <Translate
                    id="verification.items"
                    options={{ renderInnerHtml: true }}
                  />
                </ul>
              </div>
              <div className="about-page__img col-12 col-md-3 text-center text-md-left order-1 order-md-3">
                <img src={img1x1} srcSet={`${img1x2} 2x`} alt="" />
              </div>
            </div>
          </div>

          <div className="container custom-offset-1">
            <div className="row">
              <div className="about-page__title col-10 offset-1 mt-5 mb-md-5 order-2 order-md-1 text-center text-md-left">
                <Translate id="payment-solution.title" />
              </div>
              <div className="col-md-4 offset-md-1 text-center text-md-left order-3 order-md-2 mt-5 mt-md-0">
                <ul className="about-page__list">
                  <Translate
                    id="payment-solution.items"
                    options={{ renderInnerHtml: true }}
                  />
                </ul>
              </div>
              <div className="about-page__img col-12 col-md-3 text-center text-md-left order-1 order-md-3">
                <img src={img2x1} srcSet={`${img2x2} 2x`} alt="" />
              </div>
            </div>
          </div>

          <div className="container custom-offset-1">
            <div className="row">
              <div className="about-page__title col-10 offset-1 mt-5 mb-md-5 order-2 order-md-1 text-center text-md-left">
                <Translate id="dashboard.title" />
              </div>
              <div className="col-md-4 offset-md-1 text-center text-md-left order-3 order-md-2 mt-5 mt-md-0">
                <ul className="about-page__list">
                  <Translate
                    id="dashboard.items"
                    options={{ renderInnerHtml: true }}
                  />
                </ul>
              </div>
              <div className="about-page__img col-12 col-md-3 text-center text-md-left order-1 order-md-3">
                <img src={img3x1} srcSet={`${img3x2} 2x`} alt="" />
              </div>
            </div>
          </div>
        </div>

        <BaseFooter isMenuHided={true}/>

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />
      </div>
    );
  }
});
