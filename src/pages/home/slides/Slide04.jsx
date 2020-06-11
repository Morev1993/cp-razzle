import React, { Component, Fragment } from 'react';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

import ProblemBox from './shared-in-slides/ProblemBox';

class Slide04 extends Component {

  solvedTimeout;

  constructor(props) {
    super(props);
    this.state = {
      _thisSlide: 4,
      playState: 'stop',
      playStateIn: 'stop',
      animate: 'in',
      duration: 1,
      from: {y: '-20px', opacity: '0'},
      to: {y: '0', opacity: '1'},
    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.slideTo === prevState._thisSlide) {
      return {
        playState: 'play',
        playStateIn: 'play',
        animate: 'in',
        duration: .75,
        from: {y: '-20px', opacity: '0'},
        to: {y: '0', opacity: '1'}
      };
    } else if (nextProps.slideFrom === prevState._thisSlide) {
      return {
        playState: 'play',
        playStateIn: 'reverse',
        animate: 'out',
        duration: 0.15,
        from: {y: '0', opacity: '1'},
        to: {y: '-20px', opacity: '0'}
      };
    } else {
      return {};
    }
  }

  render() {
    return (
      <div
        className={`slide slide-04 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>

        <Tween playState={this.state.playState} from={this.state.from} to={this.state.to} duration={this.state.duration}>



          <div className="slides-main-text slide-show-on-mobile" style={{opacity: 0}}>
            Overwhelmed by chargebacks? <br/>
            Smart Dispute Management tools
          </div>




          <div className="slides-main-text slide-hide-on-mobile" style={{opacity: 0}}>

            {/* OVERHELMED BY CHARGEBACKS? */}
            <Timeline
              wrapper={
                <div className="slide-problem"></div>
              }
              playState={this.state.playStateIn}
              target={
                <Fragment>

                  <ProblemBox slideTo={this.props.slideTo} currentSlide={this.state._thisSlide} slideFrom={this.props.slideFrom} />

                  <SplitLetters>
                    <div className="slide-problem-question">
                      Overwhelmed &nbsp; by &nbsp; chargebacks?
                    </div>
                  </SplitLetters>
                </Fragment>
              }
            >
              <Tween
                staggerFrom={{ opacity: '0' }}
                stagger={0.02}
                duration={0.25}
                ease="Elastic.easeOut"
              />

              <Timeline
                target={
                  <Fragment>
                    <div style={{
                      width: '100%',
                      padding: '32px',
                      paddingLeft: '16px'
                    }}>

                      {/* RISK MANAGEMENT */}
                      <Timeline
                        wrapper={
                          <div style={{
                            fontWeight: '900',
                            letterSpacing: '-2px',
                            display: 'inline-block'
                          }}>
                          </div>
                        }
                        playState={this.state.playStateIn}
                        target={
                          <Fragment>
                            <SplitLetters>
                              <div style={{
                                display: 'inline-block'
                              }}>
                                Smart &nbsp; Dispute
                              </div>
                            </SplitLetters>
                          </Fragment>
                        }
                      >

                        <Tween
                          staggerFrom={{ opacity: '0' }}
                          stagger={0.02}
                          delay={0.4}
                          duration={0.5}
                          ease="Elastic.easeOut"
                        />

                      </Timeline>

                      {/* SMART DRC */}
                      <Timeline
                        wrapper={
                          <div></div>
                        }
                        playState={this.state.playStateIn}
                        target={
                          <Fragment>
                            <SplitLetters>
                              <div style={{
                                display: 'inline-block',
                              }}>
                                Management &nbsp; tools
                              </div>
                            </SplitLetters>
                          </Fragment>
                        }
                      >

                        <Tween
                          staggerFrom={{ opacity: '0' }}
                          stagger={0.02}
                          delay={0.5}
                          duration={0.5}
                          // onCompleteAll={this.solveProblem}
                          ease="Elastic.easeOut"
                        />

                      </Timeline>



                    </div>
                  </Fragment>
                }
              >
                <Tween
                  from={{ x: '2000' }}
                  duration={0.3}
                  ease="Back.easeOut.config(1.7)"
                />
                <Tween
                  to={{ background: 'rgba(255,255,255,0)' }}
                  duration={2}
                  ease="Back.easeOut.config(1.7)"
                />
              </Timeline>

            </Timeline>

          </div>
        </Tween>
      </div>
    );
  }

}

export default Slide04;
