import React, { Component } from 'react';
import {Helmet} from "react-helmet"
// TODO: Вариации NextSlide / PreviousSlide - много дублирования кода.


// OPTIONS
import { options, HEADER_LAYOUTS } from 'utils/options';

import Header from 'shared/parts/Header';
import GoDemo from 'shared/parts/go-demo/GoDemo';
import Footer from 'shared/parts/footer/Footer';
import SlidesControl from './SlidesControl';

import Slide01 from './slides/Slide01';
import Slide02 from './slides/Slide02';
import Slide03 from './slides/Slide03';
import Slide04 from './slides/Slide04';
import Slide05 from './slides/Slide05';
import Slide06 from './slides/Slide06';
import Slide07 from './slides/Slide07';
import Slide08 from './slides/Slide08';
import Slide09 from './slides/Slide09';
import Slide10 from './slides/Slide10';
import Slide11 from './slides/Slide11';

import './HomePage.scss';

class HomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {

      easingUp: false,
      easingDown: false,
      currentSlide: options.initialSlide,
      slidesCount: options.slidesCount,
      windowHeight: 0,
      windowWidth: 0,

      slideFrom: null,
      slideTo: options.initialSlide
    };

    this.nextSlide       = this.nextSlide.bind(this);
    this.previousSlide   = this.previousSlide.bind(this);
    this.scrollHandler   = this.scrollHandler.bind(this);
    this.resizeHandler   = this.resizeHandler.bind(this);
    this.setActiveSlide  = this.setActiveSlide.bind(this);
    this.handleClick     = this.handleClick.bind(this);
    this.handleKeyup     = this.handleKeyup.bind(this);
  }

  setActiveSlide(slideNumber) {
    this.resetSlideShowCounter();
    this.setState((state, props) => {
      return {
        easingUp: false,
        easingDown: false,
        currentSlide: slideNumber,
        slideFrom: state.currentSlide,
        slideTo: slideNumber,
        windowHeight: window.innerHeight
      };
    })
  }

  autoSlide() {
    this.setState(function(state) {
      if (state.currentSlide === state.slidesCount) {
        return {
          easingDown: false,
          currentSlide: 1,
          slideFrom: state.slidesCount,
          slideTo: 1
        };
      } else {
        return {
          easingDown: false,
          currentSlide: state.currentSlide + 1,
          slideFrom: state.currentSlide,
          slideTo: state.currentSlide + 1
        };
      }
    });
  }

  componentDidMount() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth
    });
    window.addEventListener('wheel', this.scrollHandler, {passive: false});
    window.addEventListener('resize', this.resizeHandler);
    window.addEventListener('keyup', this.handleKeyup);

    const self = this;

    this.slideShow = setInterval(() => {
      self.autoSlide();
    }, options.slideShowDelay);

    if (typeof window !== 'undefined') {
      const Hammer = require('hammerjs');

      this.hammer = Hammer(window);
      this.hammer.on('swipeleft', this.nextSlide);
      this.hammer.on('swiperight', this.previousSlide);
    }

  }

  componentWillUnmount() {
    clearInterval(this.slideShow);
    window.removeEventListener('wheel', this.scrollHandler, { passive: false });
    window.removeEventListener('resize', this.resizeHandler);
    window.removeEventListener('keyup', this.handleKeyup);
    clearInterval(this.transitionTimeout);
    if (typeof window !== 'undefined') {
      this.hammer.off('swipeleft');
      this.hammer.off('swiperight');
    }
  }

  resetSlideShowCounter() {
    const self = this;
    clearInterval(this.slideShow);
    this.slideShow = setInterval(() => {
      self.autoSlide();
    }, options.slideShowDelay);
  }

  resizeHandler() {
    this.setState({
      windowHeight: window.innerHeight,
      windowWidth: window.innerWidth,
    })
  }

  handleKeyup(event) {
    if (event.keyCode === 32) {
      this.nextSlide(false);
    }
    if (event.keyCode === 40) {
      this.nextSlide(false);
    }
    if (event.keyCode === 38) {
      this.previousSlide(false);
    }
  }

  handleClick(event) {
    this.nextSlide(false);
  }

  scrollHandler(event) {
    event.preventDefault();

    if (event.deltaY < 0) {
      if (!this.state.easingUp) {
        this.previousSlide();
        this.transitionTimeout = setTimeout(() => {
          this.setState({ easingUp: false });
        }, options.slideTransitionDuration);
      }
    } else if (event.deltaY > 0) {
      if (!this.state.easingDown) {
        this.nextSlide();
        this.transitionTimeout = setTimeout(() => {
          this.setState({ easingDown: false });
        }, options.slideTransitionDuration);
      }
    }
  }

  nextSlide(easing) {

    this.resetSlideShowCounter();
    this.setState(function(state, props) {
      if (state.currentSlide === state.slidesCount) {
        return {
          easingDown: easing === false ? false : true,
          currentSlide: 1,
          slideFrom: state.slidesCount,
          slideTo: 1
        };
      } else {
        return {
          easingDown: easing === false ? false : true,
          currentSlide: state.currentSlide + 1,
          slideFrom: state.currentSlide,
          slideTo: state.currentSlide + 1
        };
      }
    });
  }

  previousSlide(easing) {
    this.resetSlideShowCounter();
    this.setState(function(state, props) {
      if (state.currentSlide === 1) {
        return {
          easingUp: easing === false ? false : true,
          currentSlide: state.slidesCount,
          slideFrom: 1,
          slideTo: state.slidesCount
        };
      } else {
        return {
          easingUp: easing === false ? false : true,
          currentSlide: state.currentSlide - 1,
          slideFrom: state.currentSlide,
          slideTo: state.currentSlide - 1
        };
      }
    });
  }

  calculateEasing() {
    if (this.state.easingUp) {
      if (this.state.easingDown) {
        return 'both';
      } else {
        return 'easingUp'
      }
    } else if (this.state.easingDown) {
      return 'easingDown'
    } else {
      return 'none';
    }
  }

  render() {
    return (
      <div className="home-page" >
        <Helmet title="HOME">
          <meta name="description" content="Cardpay is a licensed ecommerce acquirer and a payment service provider for online businesses" />
        </Helmet>

        <div className="container outer-slides-container">
          <div className="slides-container" onClick={this.handleClick}>

            <Slide01
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              windowWidth={this.state.windowWidth}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide02
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide03
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide04
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide05
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide06
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide07
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide08
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide09
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide10
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

            <Slide11
              easing={this.calculateEasing()}
              windowHeight={this.state.windowHeight}
              slideFrom={this.state.slideFrom}
              slideTo={this.state.slideTo}
            />

          <GoDemo currentSlide={this.state.currentSlide} top={this.state.currentSlide !== 1} />

          </div>
        </div>

        <Header
          out={this.state.currentSlide === 1 ? 'out' : 'in'}
          layout={HEADER_LAYOUTS.sticky}
        />

        <Header
          out={this.state.currentSlide !== 1 ? 'out' : 'in'}
          layout={HEADER_LAYOUTS.base}
        />

        <Footer
          slideTo={this.state.slideTo}
          slideFrom={this.state.slideFrom}
        />

        <SlidesControl
          setActiveSlide={this.setActiveSlide}
          activeSlide={this.state.currentSlide}
        />

      </div>
    );
  }

}

export default HomePage;
