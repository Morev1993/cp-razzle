import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Tween, Timeline, SplitWords } from 'react-gsap';

class Slide03Counter extends Component {

  render() {
    return (
      <Fragment>

        <div className="text-muted" style={{
          overflow: 'hidden',
          height: '160px'
        }}>
          <Timeline
            playState={this.props.playState}
            repeat={1000}
            delay={1}
            target={
              <Fragment>
                <SplitWords>
                  <div className="splitted-letter">
                    Blah Blah Blah
                  </div>
                </SplitWords>
              </Fragment>
            }
          >

            <Tween
              staggerFrom={{ display: 'none', y: '-240px' }}
              staggerTo={{ display: 'inline-block', y: '100px' }}
              stagger={0.1} duration={5} ease="Power0.easeNone"
            />

          </Timeline>
        </div>

      </Fragment>
    );
  }

}

Slide03Counter.propTypes = {
  playState: PropTypes.string,
  animate:   PropTypes.string
}

export default Slide03Counter;
