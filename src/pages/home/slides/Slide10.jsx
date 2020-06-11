import React, { Component } from 'react';
import { Tween } from 'react-gsap';

class Slide11 extends Component {

  constructor(props) {
    super(props);
    this.state = {

      _thisSlide: 10,
      playState: 'stop',
      playStateIn: 'stop',

      animate: 'in',
      duration: 0.4,
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
        duration: 0.4,
        from: {y: '-20px', opacity: '0'},
        to: {y: '0', opacity: '1'},
      };
    } else if (nextProps.slideFrom === prevState._thisSlide) {
      return {
        playState: 'play',
        playStateIn: 'stop',

        animate: 'out',
        duration: 0.4,
        from: {y: '0', opacity: '1'},
        to: {y: '-20px', opacity: '0'},
      };
    } else {
      return {};
    }
  }

  render() {
    return (
      <div className={`slide slide-10 ${this.props.slideTo === this.state._thisSlide ? 'active' : ''}`}>
        <Tween
          playState={this.state.playState}
          from={this.state.from}
          to={this.state.to}
          duration={this.state.duration}
        >


          <div className="slides-main-text slide-show-on-mobile" style={{opacity: 0}}>
            Our products:<br/>
            <div className="slides-small-text">
              Marketplace payment engine, Recurring payments and subscriptions, Merchant dashboard, Installment payments, Risk management UI, Fraud management, Current accounts
            </div>
          </div>



          <div className="slides-main-text slide-hide-on-mobile" style={{opacity: 0}}>


              <div className="text-row">Our products</div>

              <ul className="slides-list-text">
                <Tween
                  playState={this.state.playStateIn}
                  staggerFrom={{
                    opacity: 0,
                    cycle: {
                      x: [-90, 90],
                      transformOrigin: ['50% top -100', '50% bottom 100']
                    },
                  }}
                  duration={this.state.duration}
                  stagger={0.05}
                >
                  <li>Marketplace payment engine</li>
                  <li>Recurring payments and subscriptions</li>
                  <li>Merchant dashboard</li>
                  <li>Installment payments</li>
                  <li>Risk management UI</li>
                  <li>Fraud management</li>
                  <li>Current accounts</li>
                </Tween>
              </ul>

          </div>
        </Tween>
      </div>
    );
  }

}

export default Slide11;
