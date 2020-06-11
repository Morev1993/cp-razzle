import React, { Component } from 'react';
import {NavLink} from "react-router-dom";
import renderHTML from 'react-render-html';
import {Helmet} from "react-helmet";

import Header from '../../../shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';

import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";

import "./VacancyPage.scss";
import {connect} from "react-redux";
import {loadCareersPost} from "../../../actions/careers";
import Loader from "../../../shared/loader/Loader";

class VacancyPage extends Component {
  constructor(props) {
    super(props);

    this.props.loadVacancy(this.props.vacancyId);
  }

  get vacancy() {
    return this.props.vacancy || {};
  }

  get title() {
    return this.vacancy.title && this.vacancy.title.rendered;
  }

  get content() {
    return this.vacancy.content && this.vacancy.content.rendered;
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <div className="vacancy-page typepage">
        <Helmet title={this.title} />

        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        {this.props.isLoading && (
          <Loader />
        )}

        {!this.props.isLoading && (
          <div className="container" style={{ marginBottom: '50px' }}>
            <div className="row">
              <div className="col-12 col-md-1">
                <div>
                  <NavLink to="/careers">
                    <svg width="52" height="52" viewBox="0 0 52 52">
                      <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                        <circle cx="25" cy="25" r="25" fill="#FFF" stroke="#007AFF"/>
                        <path fill="#007AFF" fillRule="nonzero" d="M11.409 25.143l6.336 3.564-.49.872-8-4.5v-.872l8-4.5.49.872-6.336 3.564H40v1H11.409z"/>
                      </g>
                    </svg>
                  </NavLink>
                </div>
              </div>

              <div className="vacancy-page__caption col-12 col-md-7">
                {this.title}
              </div>
            </div>

            <div className="vacancy-page__body row" style={{ marginTop: '36px' }}>
              <div className="col-12 col-md-10 offset-md-1">
                {this.content ? renderHTML(this.content) : ''}

                <div className="vacancy-page__apply">
                  <button className="btn btn-outline-success" onClick={() => window.location = 'mailto:hello@cardpay.com'}>Apply</button>
                </div>
              </div>
            </div>
          </div>
        )}

        {!this.props.isLoading && (
          <BaseFooter></BaseFooter>
        )}

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />

      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const vacancyId = +props.match.params.vacancyId;
  const vacancy = state.careers.currentPost;

  return {
    vacancyId,
    vacancy,
    isLoading: state.careers.isCurrentPostLoading,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadVacancy(vacancyId) {
    dispatch(loadCareersPost(vacancyId));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(VacancyPage);

