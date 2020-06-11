import withStyles from "@material-ui/core/es/styles/withStyles";
import {TextValidator} from "react-material-ui-form-validator";
import React from "react";

class TextValidatorCustom extends TextValidator {
  constructor(props) {
    super(props);
    this.state = {
      focused: false
    };

    this.onBlur = this.onBlur.bind(this);
    this.onFocus = this.onFocus.bind(this);
  }

  onFocus() {
    this.setState({
      focused: true
    });
  }

  onBlur() {
    this.setState({
      focused: false
    });

    this.props.onBlur(this.input.props);
  }

  get filteredProps() {
    const newProps = {
      ...this.props
    };

    delete newProps.submitted;

    return newProps;
  }

  render() {
    return (
      <div className={this.state.focused ? 'focused' : ''}>
        <TextValidator
          ref={c => { this.input = c }}
          {...this.filteredProps}
          className={this.props.className || 'material-control '}
          onFocus={this.onFocus}
          onBlur={this.onBlur}
           InputLabelProps={{
             FormLabelClasses: {
               filled: 'control-label-filled',
               focused: 'control-label-focused',
               error: 'control-label-error'
             }
           }}
          InputProps={{
            className: `control-inner ${this.state.focused ? ' control-focused' : ''}`
          }}
        />
      </div>
    )
  }
}

const styles = () => ({
  root: {
    display: 'block',
    width: '100%'
  }
});

export const CustomInput = withStyles(styles)(TextValidatorCustom);
