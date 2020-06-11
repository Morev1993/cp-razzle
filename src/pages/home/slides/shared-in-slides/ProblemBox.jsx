import React, { Component } from 'react';

const solvedAnimationLength     = 1500;
// const solvedAnimationLengthBack = 0;

class ProblemBox extends Component {

  problemNode;
  problemTimeout;

  constructor(props) {
    super(props);
    this.state = {
      problemClass: 'problem-box'
    };
  }

  shouldComponentUpdate(props) {

    // console.log(props.slideFrom);
    // console.log(props.currentSlide);
    // console.log(props.slideTo);

    if (props.slideTo === props.currentSlide) {

      // console.log(':in');
      this.problemTimeout = setTimeout(() => {
        this.problemNode.classList.add('solved')
      }, solvedAnimationLength);

    } else if (props.slideFrom === props.currentSlide) {

      // console.log(':out');
      // this.problemTimeout = setTimeout(() => {
        this.problemNode.classList.remove('solved');
      // }, solvedAnimationLengthBack);
      clearTimeout(this.problemTimeout);

    } else {
      // console.log(':other');
      // this.problemTimeout = setTimeout(() => {
        this.problemNode.classList.remove('solved');
      // }, solvedAnimationLengthBack);
      clearTimeout(this.problemTimeout);
    }
    return true;
  }

  componentWillUnmount() {
    clearTimeout(this.problemTimeout);
  }

  render() {
    return (
      <div ref={node => this.problemNode = node} className={this.state.problemClass}></div>
    );
  }

}

export default ProblemBox;
