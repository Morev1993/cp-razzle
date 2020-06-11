import React, { Component, Fragment } from 'react';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

class Slide02 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _thisSlide: 2,
      playState: 'stop',
      animate: 'in',
      duration: 1,
      from: {y: '-20px', opacity: '0'},
      to: {y: '0', opacity: '1'},
      stagger_playState: 'stop',
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.slideTo === prevState._thisSlide) {
      return {
        playState: 'play',
        animate: 'in',
        duration: .75,
        from: {y: '-20px', opacity: '0'},
        to: {y: '0', opacity: '1'},
        stagger_playState: 'play',
      };
    } else if (nextProps.slideFrom === prevState._thisSlide) {
      return {
        playState: 'play',
        animate: 'out',
        duration: 0.15,
        from: {y: '0', opacity: '1'},
        to: {y: '-20px', opacity: '0'},
        stagger_playState: 'reverse',
      };
    } else {
      return {};
    }
  }

  render() {
    return (
      <div className={`slide slide-02 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>
        <Tween playState={this.state.playState} from={this.state.from} to={this.state.to} duration={this.state.duration}>


          <div className="slides-main-text slide-show-on-mobile" style={{opacity: 0}}>
            Fast onboarding. <br/>In 1 day.
          </div>



          <div className="slides-main-text slide-hide-on-mobile" style={{opacity: 0}}>

            <Timeline
              playState={this.state.stagger_playState}
              wrapper={
                <div></div>
              }
              target={
                <Fragment>
                  <SplitLetters>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      Fast
                    </div>
                  </SplitLetters>
                </Fragment>
              }
            >
              <Tween
                staggerFrom={{ opacity: '0' }}
                stagger={0.05}
                duration={0.2}
                ease="Back.easeInOut"
              />

                <Tween
                  wrapper={<div style={{ marginBottom: '1%'}} />}
                  staggerFrom={{ opacity: '0' }}
                  stagger={0.05}
                  duration={0.2}
                  ease="Back.easeInOut"
                >
                  <SplitLetters>
                    <div style={{ position: 'relative', display: 'inline-block' }}>
                      onboarding
                    </div>
                  </SplitLetters>
                </Tween>

                <Tween
                  from={{ opacity: '0', x: '-1000px' }}
                  duration={0.2}
                >

                  <div>
                    <div className="slides-main-marked-text" style={{ fontWeight: 900 }}>
                      in 1 day
                    </div>
                  </div>

                </Tween>

            </Timeline>

          </div>
        </Tween>
      </div>
    );
  }

}

export default Slide02;
