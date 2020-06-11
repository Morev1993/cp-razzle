import React, { Component } from 'react';
import { Tween, SplitLetters } from 'react-gsap';

import Slide01Counter from './slide-01/Slide01Counter';

class Slide01 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _thisSlide: 1,
      playState: 'stop',
      animate: 'in',
      duration: 0.8,

      from:     { y: '-20px', opacity: '0'},
      to:       { y: '0', opacity: '1'},

      box_from: { width: '20px' },
      box_to:   { width: `${ props.windowWidth > 767 ? '160px' : props.windowWidth > 374 ? '120px' : '96px'}` },

      fintech_from: { x: '-100px' },
      fintech_to:   { x: '0px' },
      fintech_duration: 1,

    };
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.slideTo === prevState._thisSlide) {
      return {
        playState: 'play',
        animate: 'in',
        duration: 0.8,
        from: { opacity: '0'},
        to: { opacity: '1'},

        box_from: { width: '20px' },
        box_to:   { width: `${ nextProps.windowWidth > 767 ? '160px' : nextProps.windowWidth > 374 ? '120px' : '96px'}` },

        fintech_from: { x: '-500px' },
        fintech_to:   { x: '0px' },
        fintech_duration: 1,
      };
    } else if (nextProps.slideFrom === prevState._thisSlide) {
      return {
        playState: 'reverse',
        animate: 'out',
        duration: 0.15,
        from: { opacity: '1'},
        to: { opacity: '0'},

        box_from:   { width: `${ nextProps.windowWidth > 767 ? '160px' : nextProps.windowWidth > 374 ? '120px' : '96px'}` },
        box_to: { width: '20px' },

        fintech_from: { x: '0px' },
        fintech_to:   { x: '-500px' },
        fintech_duration: 0.5,
      };
    } else {
      return {};
    }
  }

  render() {
    return (
      <div className={`slide slide-01 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>
        <Tween from={this.state.from} to={this.state.to} duration={this.state.duration}>



          <div className="slides-main-text slide-show-on-mobile" style={{opacity: 0}}>
            10+ years of experience in fintech
          </div>



          <div className="slides-main-text slide-hide-on-mobile" style={{opacity: 0}}>

                  {/* COUNTER */}
                  <Slide01Counter playState={this.state.playState} animate={this.state.animate} />

                  {/* YELLOW BOX */}
                  <Tween from={this.state.box_from} to={this.state.box_to} duration={this.state.duration}>
                    <span className="slides-main-marked-text counter-box">&nbsp;&nbsp;&nbsp;</span>
                  </Tween>

                  {/* YEARS */}
                  <Tween
                    playState={this.state.playState}
                    staggerFrom={{ opacity: '0' }}
                    staggerTo={{ opacity: '1' }}
                    delay={0.5}
                    stagger={0.05}
                    duration={0.2}
                    ease="Power2.easeOut"
                  >
                    <SplitLetters>
                      <div style={{ display: 'inline-block', fontWeight: 900 }}>
                        years
                      </div>
                    </SplitLetters>
                  </Tween>

                  {/* OF EXPERIENCE */}
                  <Tween
                    wrapper={<div />}
                    staggerFrom={{ opacity: '0' }}
                    playState={this.state.playState}
                    delay={0.7}
                    stagger={0.05}
                    duration={0.2}
                    ease="Elastic.easeOut"
                  >
                    <SplitLetters>
                      <div style={{ display: 'inline-block' }}>
                        of &nbsp; experience
                      </div>
                    </SplitLetters>
                  </Tween>

                  {/* IN FINTECH */}
                  <div className='fintech-wrapper'>
                    <Tween
                      delay={0.8}
                      from={this.state.fintech_from}
                      to={this.state.fintech_to}
                      duration={this.state.fintech_duration}
                    >
                      <div style={{ fontStyle: 'italic', letterSpacing: '-2px' }}>
                        in &nbsp;
                        <span className="text-success">fin</span>
                        tech
                      </div>
                    </Tween>
                  </div>

          </div>

        </Tween>
      </div>
    );
  }

}

export default Slide01;
