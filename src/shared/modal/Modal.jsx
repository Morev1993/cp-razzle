import React from 'react';

import './Modal.scss';

import Day5 from 'assets/modals/meetup/days/5_days.jpg';
import Day5x2 from 'assets/modals/meetup/days/5_days@2x.jpg';
import Day4 from 'assets/modals/meetup/days/4_days.jpg';
import Day4x2 from 'assets/modals/meetup/days/4_days@2x.jpg';
import Day3 from 'assets/modals/meetup/days/3_days.jpg';
import Day3x2 from 'assets/modals/meetup/days/3_days@2x.jpg';
import Day2 from 'assets/modals/meetup/days/2_days.jpg';
import Day2x2 from 'assets/modals/meetup/days/2_days@2x.jpg';
import Day1 from 'assets/modals/meetup/days/1_day.jpg';
import Day1x2 from 'assets/modals/meetup/days/1_day@2x.jpg';
import Today from 'assets/modals/meetup/days/Today.jpg';
import TodayX2 from 'assets/modals/meetup/days/Today@2x.jpg';

export class Modal extends React.Component {
  constructor(props) {
    super(props);

    this.close = this.close.bind(this);
  }

  close() {
    if (this.props.onClose) {
      this.props.onClose();
    }
  }

  get images() {
    const today = [<Today />, <TodayX2 />];

    const images = {
      5: [<Day5 />, <Day5x2 />],
      4: [<Day4 />, <Day4x2 />],
      3: [<Day3 />, <Day3x2 />],
      2: [<Day2 />, <Day2x2 />],
      1: [<Day1 />, <Day1x2 />],
      0: today,
      '-1': today,
      '-2': today,
      '-3': today,
      '-4': today,
    };
    return images[this.props.finishDays] || [];
  }

  render() {
    const { images } = this;

    return (
      <div className="custom-modal">
        <div className="custom-modal__bg" />

        <div className="custom-modal__window">
          <div className="custom-modal__close" onClick={this.close}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M30 10L10 30" stroke="#1E222A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M10 10L30 30" stroke="#1E222A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>

          <a href="https://www.eventbrite.com/e/diversity-fintech-talent-week-dftw-by-cardpay-tickets-70898731013?aff=ebdssbdestsearch" target="_blank" rel="noopener noreferrer">
            <img
              alt="Banner"
              src={images[0].type}
              srcSet={`${images[1].type} 2x`}
            />
          </a>
          <p>Today Cardpay Diversity Fintech Talent Week in London! See you at Crowne Plaza for 5 days of workshops from the fintech’s best!</p>
        </div>
      </div>
    );
  }
}
