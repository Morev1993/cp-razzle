import React, { Component } from 'react';
import { Tween } from 'react-gsap';

import Slide03Counter from './slide-03/Slide03Counter';

class Slide03 extends Component {

  constructor(props) {
    super(props);
    this.state = {
      _thisSlide: 3,
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
      <div className={`slide slide-03 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>
        <Tween playState={this.state.playState} from={this.state.from} to={this.state.to} duration={this.state.duration}>



          <div className="slides-main-text slide-show-on-mobile" style={{opacity: 0}}>
            Spare yourself <br/>the usual marketing <br/>blah blah blah…
          </div>




          <div className="slides-main-text slide-hide-on-mobile" style={{opacity: 0}}>


            <div className="slide-03-text">

              <div className="slide-03-caption">

                {/* SPARE YOURSELF */}
                <Tween
                  from={{ x: '-500px' }}
                  playState={this.state.playStateIn}
                  duration={1}
                  ease="Power2.easeInOut"
                >
                  <span style={{ fontWeight: 700 }}>
                    Spare yourself
                  </span>
                </Tween>



                {/* YET ANOTHER MARKETING */}

                <Tween
                  from={{ x: '-500px' }}
                  playState={this.state.playStateIn}
                  duration={1}
                  ease="Power2.easeInOut"
                >
                      <div className="">
                        the usual marketing <br/> blah blah blah …
                      </div>
                </Tween>

              </div>

              {/* BLAH BLAH BLAH COUNTER */}
              <div className="blah-blah" style={{
                position: 'relative',
                width: '300px',
                paddingLeft: '64px'
              }}>

                  <Slide03Counter
                    playState={ this.state.playStateIn }
                    animate={ this.state.animate }
                  />

              </div>

            </div>


          </div>
        </Tween>
      </div>
    );
  }

}

export default Slide03;
