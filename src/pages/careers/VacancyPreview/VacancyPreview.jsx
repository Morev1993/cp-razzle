import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import renderHTML from 'react-render-html';

import './VacancyPreview.scss';

export class VacancyPreview extends Component {
  get vacancy() {
    return this.props.vacancy || {};
  }

  get title() {
    return this.vacancy.title && this.vacancy.title.rendered;
  }

  get preview() {
    return this.vacancy.excerpt && this.vacancy.excerpt.rendered;
  }

  render() {
    return (
      <div className={`vacancy-preview d-flex flex-column ${this.props.className}`} style={{ padding: '30px' }}>
        <div className="vacancy-preview__caption">{this.title}</div>
        <div className="vacancy-preview__description mt-3 mb-3">{renderHTML(this.preview)}</div>
        <div className="mt-4 d-flex justify-content-between mt-auto">
          <button className="btn btn-outline-success px-3" onClick={() => window.location.href='mailto:hello@cardpay.com'}>Send your CV</button>
          <NavLink to={`/careers/${this.vacancy.id}`} className="vacancy-preview__details">Details</NavLink>
        </div>
      </div>
    );
  }
}

