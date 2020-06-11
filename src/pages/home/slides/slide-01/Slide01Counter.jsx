import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

class Slide01Counter extends Component {

  render() {
    return (
      <Fragment>
        <Timeline
          playState={this.props.playState}
          target={
            <div className="slide-01-counter--final-letter">10+</div>
          }
        >

          <Tween
            delay={0.5}
            from={{ display: 'none', y: '-250px' }}
            to={{ display: 'inline-block', y: '0px' }}
            duration={0.3}
            ease="Back.easeIn"
          />

          <div className="super-counter">
            <Timeline
              playState={this.props.playState}
              target={
                <Fragment>
                  <SplitLetters>
                    <div className="splitted-letter">
                      1&nbsp;2&nbsp;3&nbsp;4&nbsp;5&nbsp;6&nbsp;7&nbsp;8&nbsp;9&nbsp;
                    </div>
                  </SplitLetters>
                </Fragment>
              }
            >
              <Tween
                staggerFrom={{ display: 'none', y: '-250px' }}
                staggerTo={{ display: 'inline-block', y: '250px' }}
                stagger={0.03} duration={0.3} ease="Back.easeIn" />
            </Timeline>
          </div>

        </Timeline>
      </Fragment>
    );
  }

}

Slide01Counter.propTypes = {
  playState: PropTypes.string,
  animate:   PropTypes.string
}

export default Slide01Counter;
