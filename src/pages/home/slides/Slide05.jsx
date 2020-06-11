import React, { Component, Fragment } from 'react';
import { Tween, Timeline, SplitLetters } from 'react-gsap';

import ProblemBox from './shared-in-slides/ProblemBox';

class Slide05 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _thisSlide: 5,
      playState: 'stop',
      playStateIn: 'stop',
      animate: 'in',
      duration: 1,
      from: { y: '-20px', opacity: '0' },
      to:   { y: '0', opacity: '1' },
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
        className={`slide slide-05 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>
        <Tween playState={this.state.playState} from={this.state.from} to={this.state.to} duration={this.state.duration}>




          <div className="slides-main-text slide-show-on-mobile" style={{opacity: 0}}>
            Striving to comply? <br/>
            Fast Semi-Automated <br/>
            KYC & AML
          </div>



          <div className="slides-main-text slide-hide-on-mobile" style={{opacity: 0}}>

            <Timeline
              wrapper={
                <div className="slide-problem" ></div>
              }
              playState={this.state.playStateIn}
              target={
                <Fragment>
                  <ProblemBox slideTo={this.props.slideTo} currentSlide={this.state._thisSlide} slideFrom={this.props.slideFrom}/>
                  <SplitLetters>
                    <div className="slide-problem-question">
                      Striving &nbsp; to &nbsp; comply?
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
                      paddingLeft: '16px',
                }}
              >

                      <Timeline
                        wrapper={
                          <div style={{ fontWeight: '900', display: 'inline-block' }} />
                        }
                        playState={this.state.playStateIn}
                        target={
                          <SplitLetters>
                            <div style={{ display: 'inline-block' }}>
                              Fast
                            </div>
                          </SplitLetters>
                        }
                      >

                        <Tween
                          staggerFrom={{ opacity: '0' }}
                          stagger={0.01}
                          duration={0.4}
                          ease="Elastic.easeOut"
                        />

                      </Timeline>

                      <div>
                        <Tween
                          playState={this.state.playStateIn}
                          staggerFrom={{ opacity: '0' }}
                          stagger={0.01}
                          delay={0.4}
                          duration={0.4}
                          ease="Elastic.easeOut"
                        >
                          <SplitLetters>
                            <div style={{ display: 'inline-block' }}>
                              Semi-Automated
                            </div>
                          </SplitLetters>
                        </Tween>
                      </div>

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
                                KYC &nbsp; & &nbsp; AML
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
                          ease="Elastic.easeOut"
                        />

                      </Timeline>



                    </div>
                  </Fragment>
                }
              >
                <Tween
                  from={{ x: '2000' }}
                  duration={0.2}
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

export default Slide05;
