import React, { Component, Fragment } from 'react';
import { Tween } from 'react-gsap';

class Slide10 extends Component {

  timeouts = [];
  offsets = [];

  constructor(props) {
    super(props);
    this.state = {
      _thisSlide: 11,
      playState: 'stop',
      playStateRoller: 'stop',

      animate: 'in',
      duration: 0.4,
      from: {y: '-20px', opacity: '0'},
      to: {y: '0', opacity: '1'},
      stagger_playState: 'stop',

      offset: 0,

      // CRAZY DUPLICATION

      offset1: this.getRandomOffset(),
      offset2: this.getRandomOffset(),
      offset3: this.getRandomOffset(),
      offset4: this.getRandomOffset(),
      offset5: this.getRandomOffset(),
      offset6: this.getRandomOffset(),
      offset7: this.getRandomOffset(),
      offset8: this.getRandomOffset(),
      offset9: this.getRandomOffset(),
      offset10: this.getRandomOffset(),
      offset11: this.getRandomOffset(),
      offset12: this.getRandomOffset(),
      offset13: this.getRandomOffset(),
      offset14: this.getRandomOffset(),
      offset15: this.getRandomOffset(),
      offset16: this.getRandomOffset(),
      offset17: this.getRandomOffset(),
      offset18: this.getRandomOffset(),
      offset19: this.getRandomOffset(),
      offset20: this.getRandomOffset(),
      offset21: this.getRandomOffset(),
      offset22: this.getRandomOffset(),
      offset23: this.getRandomOffset(),
      offset24: this.getRandomOffset(),
      offset25: this.getRandomOffset(),
      offset26: this.getRandomOffset(),
      offset27: this.getRandomOffset(),
      offset28: this.getRandomOffset(),
      offset29: this.getRandomOffset(),
      offset30: this.getRandomOffset(),
      offset31: this.getRandomOffset(),
      offset32: this.getRandomOffset(),

    };
  }

  getRandomOffset() {
    return Math.floor((Math.random() * 8) + 1) * 200 - 200;
  }

  static getDerivedStateFromProps(nextProps, prevState) {
    if (nextProps.slideTo === prevState._thisSlide) {
      return {
        playState: 'play',
        playStateRoller: 'play',
        animate: 'in',
        duration: 0.4,
        from: {y: '-20px', opacity: '0'},
        to: {y: '0', opacity: '1'},
        stagger_playState: 'play',
      };
    } else if (nextProps.slideFrom === prevState._thisSlide) {
      return {
        playState: 'play',
        playStateRoller: 'stop',
        duration: 0,
        animate: 'out',
        from: {y: '0', opacity: '1'},
        to: {y: '-20px', opacity: '0'},
        stagger_playState: 'reverse',
      };
    } else {
      return {};
    }
  }

  componentDidMount() {
    const self = this;

    for (let i = 0; i < 32; i++) {
      this.offsets[i] = i + 1;
    }

    for (let i = 0; i < 32; i++) {
      this.timeouts[i] = setTimeout(() => {
        self.setState({
          ['offset' + (i+1)]: self.getRandomOffset()
        });
      }, 50 * i);
    }

    this.int = setInterval(() => {
      if (this.props.slideTo === 10) {

        for (let i = 0; i < 32; i++) {
          this.timeouts[i] = setTimeout(() => {
            self.setState({
              ['offset' + (i+1)]: self.getRandomOffset()
            });
          }, 50 * i);
        }

      }
    }, 5000);

  }

  componentWillUnmount() {
    clearInterval(this.int);
    for (let i = 0; i < this.timeouts.length; i++) {
      clearTimeout(this.timeouts[i]);
    }
  }

  getTo(number) {
    return {
      backgroundPosition: `0px ${-1 * this.state[`offset${number}`]}px`
    }
  }

  getClass(number) {
    return `image-${number}`;
  }

  render() {
    return (
      <div className={`slide slide-11 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>
        <Tween
          playState={this.state.playState}
          from={this.state.from}
          to={this.state.to}
          duration={this.state.duration}
        >
          <div className="slides-main-text mb-3">Payment methods</div>
          <div className="slide-container" style={{opacity: 0}}>

            <div className="methods-wrapper">

              { this.offsets.map((i, key) => (
                <Fragment key={key}>
                  <Tween
                    playState={this.state.playStateRoller}
                    to={this.getTo(i)}
                    duration={this.state.duration}
                    ease="Back.easeOut.config(1.7)"
                  >


                    <div
                      className={`image-column ${ this.getClass(i) }`}
                    />


                  </Tween>
                </Fragment>
              ))}

            </div>

          </div>
        </Tween>
      </div>
    );
  }

}

export default Slide10;
