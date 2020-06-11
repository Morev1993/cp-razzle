import React, { Component } from 'react';

import './AdvantageSlide.scss';

export class AdvantageSlide extends Component {
  get slide() {
    return this.props.slides[this.curSlideIdx] || {};
  }

  get slides() {
    return this.props.slides || [];
  }

  get curSlideIdx() {
    return this.props.curSlideIdx;
  }

  handleClick(idx) {
    this.props.onClick(idx);
  }

  render() {
    return (
      <div className="row h-100">
        <div
          className="col-9 col-md-10 offset-md-1 align-items-stretch justify-content-around d-flex flex-column h-100"
          style={{ paddingBottom: '30px' }}
        >
          <div className="advantage-slide__caption">{this.slide.caption}</div>
          <div className="advantage-slide__description">{this.slide.description}</div>
        </div>
        <div className="advantage-slide__switch col-3 col-md-1 h-100">
          {this.slides.map((slide, idx) => (
            <div
              key={idx}
              className={`advantage-slide__switch-item ${this.curSlideIdx === idx ? 'advantage-slide__switch-item_is-active' : ''} my-2`}
              onClick={() => this.handleClick(idx)}
            />
          ))}
        </div>
      </div>
    );
  }
}
