import React, { Component } from 'react';
import { Tween, SplitLetters } from 'react-gsap';

import TextBullet from './shared-in-slides/TextBullet';
import TypewriterCursor from './shared-in-slides/TypewriterCursor';

class Slide07 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _thisSlide: 7,
      playState: 'stop',
      playStateIn: 'stop',

      playState2: 'stop',
      playState3: 'stop',

      animate: 'in',
      duration: 0.6,
      from: {y: '-20px', opacity: '0'},
      to: {y: '0', opacity: '1'},
    };


    this.handlerCompleteFirst = this.handlerCompleteFirst.bind(this);
    this.handlerCompleteSecond = this.handlerCompleteSecond.bind(this);
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.slideTo === prevState._thisSlide) {
      return {
        playState: 'play',
        playStateIn: 'play',
        animate: 'in',
        duration: 0.6,
        from: {y: '-20px', opacity: '0'},
        to: {y: '0', opacity: '1'},
      };
    } else if (nextProps.slideFrom === prevState._thisSlide) {
      return {
        playState: 'play',
        playStateIn: 'stop',
        playState2: 'stop',
        playState3: 'stop',

        animate: 'out',
        duration: 0.6,
        from: {y: '0', opacity: '1'},
        to: {y: '-20px', opacity: '0'},
      };
    } else {
      return {};
    }
  }

  handlerStartFirst() {

  }

  handlerCompleteFirst() {
    this.setState({ playState2: 'play' });
  }

  handlerStartSecond() {

  }

  handlerCompleteSecond() {
    this.setState({ playState3: 'play' });
  }

  render() {
    return (
      <div className={`slide slide-07 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>
        <Tween playState={this.state.playState} from={this.state.from} to={this.state.to} duration={this.state.duration}>



          <div className="slides-main-text slide-show-on-mobile" style={{opacity: 0}}>
            <ul className="slides-small-list">
              <li>Unified, rapid settlements.</li>
              <li>Highly Responsive Support.</li>
              <li>Comprehensive Reporting.</li>
            </ul>
          </div>



          <div className="slides-main-text slide-hide-on-mobile" style={{opacity: 0}}>

            <div className="text-typewriter">

              <TextBullet />

              <Tween
                staggerFrom={{ display: 'none' }}
                stagger={0.02}
                duration={0.2}
                ease="Back.easeInOut"
                playState={this.state.playStateIn}
                onStartAll={this.handlerStartFirst}
                onCompleteAll={this.handlerCompleteFirst}
              >
                <SplitLetters>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    Unified, &nbsp; rapid &nbsp; settlements
                  </div>
                </SplitLetters>
              </Tween>
              { this.state.playState2 !== 'play' && <TypewriterCursor /> }

            </div>


            <div className="text-typewriter">

              <TextBullet />

              <Tween
                staggerFrom={{ display: 'none' }}
                stagger={0.02}
                duration={0.2}
                ease="Back.easeInOut"
                playState={this.state.playState2}
                onStartAll={this.handlerStartSecond}
                onCompleteAll={this.handlerCompleteSecond}
              >
                <SplitLetters>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                  Highly &nbsp; Responsive &nbsp; Support
                  </div>
                </SplitLetters>

              </Tween>

              { this.state.playState3 !== 'play' && <TypewriterCursor /> }

            </div>


            <div className="text-typewriter">

              <TextBullet />

              <Tween
                staggerFrom={{ display: 'none' }}
                stagger={0.02}
                duration={0.2}
                ease="Back.easeInOut"
                playState={this.state.playState3}
              >
                <SplitLetters>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                  Comprehensive &nbsp; Reporting
                  </div>
                </SplitLetters>
              </Tween>

              <TypewriterCursor />

            </div>


          </div>
        </Tween>
      </div>
    );
  }

}

export default Slide07;
