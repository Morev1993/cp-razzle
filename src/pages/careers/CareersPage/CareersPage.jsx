import React, { Component } from 'react';
import {Helmet} from 'react-helmet';

import Header from '../../../shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';
import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";
import {AdvantageSlide} from "../AdvantageSlide/AdvantageSlide";
import {slides} from "../data";

import './CareersPage.scss';
import {connect} from "react-redux";
import {loadCareersPosts} from "../../../actions/careers";
import Loader from "../../../shared/loader/Loader";

import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";

class CareersPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentSlideIdx: 0,
      isLoading: true,
    };

    this.changeCurrentSlide = this.changeCurrentSlide.bind(this);
    this.nextSlide();

    this.myRef = React.createRef();

    //this.props.loadPosts();
    this.props.addTranslation(translations);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    const self = this;
    const myRef = this.myRef;

    // BambooHR code
    var el;
    var xmlhttp;
    var ieFlag = 0;
    if (('XDomainRequest' in window && window.XDomainRequest !== null) && document.documentMode < 10) {
      xmlhttp=new window.XDomainRequest();
      ieFlag = 1;
    } else if (window.XMLHttpRequest) {
      xmlhttp=new XMLHttpRequest();
    } else {
      xmlhttp=new window.ActiveXObject("Microsoft.XMLHTTP");
    }

    var embedUrl = "https://cardpay.bamboohr.com/jobs/embed2.php";

    var departmentId = 0;

    if (departmentId) {
      embedUrl += '?departmentId=' + encodeURIComponent(departmentId);
    }

    if (ieFlag === 1) { //needed for IE9 CORS
      xmlhttp.onload = loadd;
      xmlhttp.open("GET",embedUrl);
      xmlhttp.send();

    } else {
      xmlhttp.onreadystatechange=function() {
        if(xmlhttp.readyState === 4 && xmlhttp.status === 200) {

          var content = xmlhttp.responseText;
          var footerId="BambooHR-Footer";
          var fel=document.getElementById(footerId);

          el=myRef.current;

          if(el && !fel) {
            content += "<div id=\"BambooHR-Footer\">Powered by <a href=\"http://www.bamboohr.com\" target=\"_blank\" rel=\"external\"><img src=\"https://resources.bamboohr.com/images/footer-logo.png\" alt=\"BambooHR - HR software\"/></a></div>";
          }

          if(el) el.innerHTML=content;
          self.setState({ isLoading: false });
        }
      };

      xmlhttp.open("GET",embedUrl,true);
      xmlhttp.send();
    }

    function loadd() { //needed for IE9 CORS
      var content = xmlhttp.responseText;
      var footerId="BambooHR-Footer";
      var fel=document.getElementById(footerId);

      if(el && !fel) {
        content += "<div id=\"BambooHR-Footer\">Powered by <a href=\"http://www.bamboohr.com\" target=\"_blank\" rel=\"external\"><img src=\"https://resources.bamboohr.com/images/footer-logo.png\" alt=\"BambooHR - HR software\"/></a></div>";
      }
      myRef.current.innerHTML=content;
    }
  }

  componentWillUnmount() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }
  }

  nextSlide() {
    if (this.timeoutId) {
      clearTimeout(this.timeoutId);
    }

    this.timeoutId = setTimeout(() => {
      this.setState((prevState) => ({
        currentSlideIdx: (prevState.currentSlideIdx + 1) % (slides.length),
      }));

      this.nextSlide();
    }, 1000 * 5);
  }

  changeCurrentSlide(value) {
    this.setState({ currentSlideIdx: value });
    this.nextSlide();
  }

  render() {
    return (
      <div className='careers-page typepage'>
        <Translate>
          {({ translate }) => (
            <Helmet title={translate('page-meta-title')}>
              <meta name="description" content="We’re hiring - come work with us!" />
            </Helmet>
          )}
        </Translate>

        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        {this.state.isLoading && (
          <Loader />
        )}

        {!this.state.isLoading && (
          <div className="container">
            <div className="row">
              <div className="careers-page__heading col-md-5 offset-md-1 mb-3 mb-md-0">
                <Translate id="page-title"/>
              </div>
              <div className="careers-page__description col-md-6">
                <Translate id="description"/>
              </div>
            </div>

            <div className="row" style={{ marginTop: '53px' }}>
              <div className="col-4 offset-4 text-center font-weight-bold">
                <Translate id="why"/>
              </div>
            </div>
          </div>
        )}

        {!this.state.isLoading && (
          <div className="careers-page__advantages mt-5">
            <div className="container h-100">
              <Translate>
                {({ translate }) => (
                  <AdvantageSlide
                    className="h-100"
                    curSlideIdx={this.state.currentSlideIdx}
                    slides={slides.map((slide, i) => {
                      slide.caption = translate(`slider.slide_${i + 1}.title`, null, { renderInnerHtml: true });
                      slide.description = translate(`slider.slide_${i + 1}.text`);
                      return slide;
                    })}
                    onClick={this.changeCurrentSlide}
                  />
                )}
              </Translate>

            </div>
          </div>
        )}

        <div className="container mt-6 pt-5">
          <div className="row">
            {!this.state.isLoading && (
              <div className="col col-md-8 offset-md-1 careers-page__heading">
                <Translate id="positions_title"/>
              </div>
            )}
            <div className="careers-page__vacancies col-12 col-md-10 offset-md-1">
              <div ref={this.myRef} />
            </div>
          </div>
        </div>

        {!this.state.isLoading && (
          <BaseFooter />
        )}

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    posts: state.careers.posts.sort((p1, p2) => {
      const p1Ts = new Date(p1.date);
      const p2Ts = new Date(p2.date);

      return p2Ts - p1Ts;
    }),
    isLoading: state.careers.isPostsLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPosts() {
    dispatch(loadCareersPosts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(withLocalize(CareersPage));
