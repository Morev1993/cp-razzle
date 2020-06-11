import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './SlidesControl.scss';

class SlidesControl extends Component {

  render() {
    return (
      <div className="slides-control">

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(1) }}
          className={`slide-button ${this.props.activeSlide === 1 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(2) }}
          className={`slide-button ${this.props.activeSlide === 2 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(3) }}
          className={`slide-button ${this.props.activeSlide === 3 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(4) }}
          className={`slide-button ${this.props.activeSlide === 4 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(5) }}
          className={`slide-button ${this.props.activeSlide === 5 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(6) }}
          className={`slide-button ${this.props.activeSlide === 6 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(7) }}
          className={`slide-button ${this.props.activeSlide === 7 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(8) }}
          className={`slide-button ${this.props.activeSlide === 8 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(9) }}
          className={`slide-button ${this.props.activeSlide === 9 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(10) }}
          className={`slide-button ${this.props.activeSlide === 10 ? 'active' : ''}`}>
        </div>

        <div
          onClick={(event) => { event.stopPropagation(); this.props.setActiveSlide(11) }}
          className={`slide-button ${this.props.activeSlide === 11 ? 'active' : ''}`}>
        </div>

      </div>
    );
  }

}

SlidesControl.propTypes = {
  setActiveSlide: PropTypes.func,
  activeSlide: PropTypes.number
}

export default SlidesControl;
