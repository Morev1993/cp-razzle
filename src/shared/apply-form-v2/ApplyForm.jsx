import React, { Component } from 'react';

import './ApplyForm.scss';
import axios from 'axios';

import ReCAPTCHA from "react-google-recaptcha";
import {ReactComponent as CheckIcon} from "assets/ic-ok-b.svg";
import wixLogo from '../../assets/wix-com-logo-vector.png';
import {REGIONS} from '../../constants/apply-form.constants';


import Dialog from 'rc-dialog';

import 'rc-dialog/assets/bootstrap.css';
import {
  CustomValidatorForm,
  ERROR_MESSAGES, isSiteOnline, isWebsite,
} from "../../utils/validators";
import {environment} from "../../environments";
import {CustomInput} from "../../shared/forms/CustomInput";
import InputLoader from "../../shared/input-loader/InputLoader";
import translations from "./translations";
import {Translate, withLocalize} from "react-localize-redux";
import MenuItem from '@material-ui/core/MenuItem';
import ReactGA from 'react-ga';

const RECAPTCHA_SITE_KEY = '6Lc2gbEUAAAAAOwidmURIse0UFjuN5OxKprP8F9x';
const CancelToken = axios.CancelToken;
const source = CancelToken.source();

class ApplyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: {
        company: '',
        firstName: '',
        lastName: '',
        email: '',
        industry: '',
        siteUrl: '',
        phone: '',
        region: '',
        message: '',
        fromWix: false,
      },
      isLoading: false,
      isSiteLoading: false,
      submitted: false,
      isSuccessShowed: false,
      preventSiteError: false
    };

    this.recaptchaRef = React.createRef();

    this.handleChange = this.handleChange.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.sendForm = this.sendForm.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    this.asyncSiteValidator = this.asyncSiteValidator.bind(this);


    CustomValidatorForm.addValidationRule('isSiteOnline', (value) => {
      clearTimeout(this.timer);
      const input = this.form.childs.find(c => c.props.name === 'siteUrl');

      if (!isWebsite(value) || value.includes('google')) {
        input.makeInvalid();
        this.setState(Object.assign(this.state, {
          preventSiteError: false
        }));
        return false;
      }

      if (this.state.submitted && input.isValid()) {
        return true;
      }

      this.setState(Object.assign(this.state, {
        preventSiteError: true
      }));


      this.timer = setTimeout(() => {
        const api = this.asyncSiteValidator(value);

        api.then(result => {
          if (result) {
            input.makeValid();
          } else {
            input.makeInvalid();
          }

        })
      }, 1500);
    });

    this.props.addTranslation(translations);
  }

  componentDidMount() {
    window.scrollTo(0, 0);

    if (window.location.href.includes('wix')) {
      const newState = Object.assign({}, this.state);

      newState.data.fromWix = !!window.location.href.includes('wix');

      this.setState(newState);
    }
  }

  // Если вернём условия использования reCaptcha -- то раскоментить
  /*componentWillUnmount() {
    const iframes = document.querySelectorAll('iframe[title="проверка recaptcha"]');

    Array.prototype.forEach.call(iframes, (iframe) => {
      const container = iframe.parentElement.parentElement;
      container.remove();
    });
  }*/

  asyncSiteValidator(value) {
    return new Promise(resolve => {
      this.setState(Object.assign(this.state, {
        isSiteLoading: true
      }));

      isSiteOnline(value, isFound => {
        this.setState(Object.assign(this.state, {
          isSiteLoading: false,
          preventSiteError: false
        }));
        resolve(isFound);
      }, source.token);
    })
  }

  handleChange(event) {
    const newState = Object.assign({}, this.state, {
      data: Object.assign(this.state.data),
      submitted: false
    });

    newState.data[event.target.name] = event.target.value;

    this.setState(newState);
  }

  handleBlur(event) {
    const {name, value} = event;
    this.handleChange({
      ...event,
      target: {
        name,
        value: value && value.trim()
      }
    });
  }

  clearFormInputsValue() {
    const newState = Object.assign({}, this.state, {
      isLoading: false,
      data: Object.assign(this.state.data)
    });
    Object.keys(newState.data).forEach(key => newState.data[key] = "");

    this.setState(newState);

    this.form.resetValidations();

    this.recaptchaRef.current.reset();
  }

  onClose = () => {
    this.setState({
      isSuccessShowed: false,
    });
  };


  handleSubmit(event) {
    event.preventDefault();

    if (this.state.isLoading || !this.form.isFormValid()) {
      return;
    }

    this.recaptchaRef.current.execute();
  }

  onSubmitClick() {
    this.setState({
      submitted: true
    });
  }

  sendForm() {
    const newState = Object.assign({}, this.state, {
      isLoading: true,
      data: Object.assign(this.state.data)
    });
    this.setState(newState);

    axios({
      method: 'post',
      url: `${environment.pipedrive_api_url}/onboarding`,
      data: newState.data,
    })
      .then(() => {
        this.setState({
          isSuccessShowed: true
        });

        if (!!environment.gaId) {
          ReactGA.event({
            category: 'ApplyForm',
            action: 'SendSuccess',
            value: 1
          });
        }
      })
      .catch( (error) => {
        // handle error
        console.log(error);
      })
      .finally(() => {
        this.clearFormInputsValue();
      })
  }

  render() {
    return (
        <div className="apply-form container">
          <div className="row">
            <div className="col-11 col-md-11 contacts-header">
              <div>
                <h1>
                  <Translate id="apply" />
                </h1>
                <p className="contacts-descr mb-0">(<Translate id="descr"/>)</p>
              </div>
              {this.state.data.fromWix && <img width={100} src={wixLogo} srcSet={`${wixLogo}`} alt="" />}

            </div>
          </div>
          <div className="row">
            <CustomValidatorForm className="col-12 col-md-12"
                                 onSubmit={this.handleSubmit}
                                 ref={c => { this.form = c }}>

              <ReCAPTCHA
                ref={this.recaptchaRef}
                sitekey={RECAPTCHA_SITE_KEY}
                onChange={this.sendForm}
                size="invisible"

              />

              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     label={translate('company')}
                                     name="company"
                                     value={this.state.data.company}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     submitted={this.state.submitted}
                                     validators={['isRequired', 'maxLength:100', 'isLatinText']}
                                     errorMessages={[ERROR_MESSAGES.required(), ERROR_MESSAGES.maxlength(100),
                                       ERROR_MESSAGES.company()]}/>
                      )}
                    </Translate>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     className="material-control"
                                     label={translate('firstName')}
                                     name="firstName"
                                     value={this.state.data.firstName}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     submitted={this.state.submitted}
                                     validators={['isRequired', 'maxLength:255', 'isName']}
                                     errorMessages={[ERROR_MESSAGES.required(), ERROR_MESSAGES.maxlength(255),
                                       ERROR_MESSAGES.name()]}/>
                      )}
                    </Translate>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     className="material-control"
                                     label={translate('lastName')}
                                     name="lastName"
                                     value={this.state.data.lastName}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     submitted={this.state.submitted}
                                     validators={['isRequired', 'maxLength:255', 'isName']}
                                     errorMessages={[ERROR_MESSAGES.required(), ERROR_MESSAGES.maxlength(255),
                                       ERROR_MESSAGES.name()]}/>
                      )}
                    </Translate>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className={(!!this.state.preventSiteError) ? 'form-group control-prevent-errors' : 'form-group'}>
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     className="material-control"
                                     label={translate('siteUrl')}
                                     name="siteUrl"
                                     value={this.state.data.siteUrl}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     disabled={this.state.isSiteLoading}
                                     submitted={this.state.submitted}
                                     validators={['isRequired', 'isUrl', 'isSiteOnline']}
                                     errorMessages={[ERROR_MESSAGES.required(), ERROR_MESSAGES.siteUrl(), ERROR_MESSAGES.siteUrl()]}/>
                      )}
                    </Translate>
                    {this.state.isSiteLoading && (<InputLoader />)}
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     className="material-control"
                                     label={translate('phone')}
                                     name="phone"
                                     value={this.state.data.phone}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     submitted={this.state.submitted}
                                     validators={['isRequired', 'isPhone']}
                                     errorMessages={[ERROR_MESSAGES.required(), ERROR_MESSAGES.phoneNumber()]}/>
                      )}
                    </Translate>
                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     className="material-control"
                                     label={translate('email')}
                                     name="email"
                                     value={this.state.data.email}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     submitted={this.state.submitted}
                                     validators={['isRequired', 'isEmail',  'minLength:6', 'maxLength:255']}
                                     errorMessages={[ERROR_MESSAGES.required(),
                                       ERROR_MESSAGES.email(), ERROR_MESSAGES.minlength(6),
                                       ERROR_MESSAGES.maxlength(255)]}/>
                      )}</Translate>

                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-5">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     className="material-control"
                                     label={translate('industry')}
                                     name="industry"
                                     value={this.state.data.industry}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     submitted={this.state.submitted}
                                     validators={['isRequired', 'maxLength:50', 'isIndustry']}
                                     errorMessages={[ERROR_MESSAGES.required(), ERROR_MESSAGES.maxlength(50),
                                       ERROR_MESSAGES.invalid()]}/>
                      )}</Translate>

                  </div>
                </div>
                <div className="col-md-5 offset-md-1">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput
                          select
                          label={translate('region')}
                          className="material-control"
                          name="region"
                          value={this.state.data.region}
                          onChange={this.handleChange}
                          onBlur={this.handleBlur}
                          validators={['isRequired']}
                          submitted={this.state.submitted}
                          errorMessages={[ERROR_MESSAGES.required()]}
                        >
                          {REGIONS.map(region => {
                            return <MenuItem value={region.value} key={region.name}>{translate(region.name)}</MenuItem>
                          })}
                        </CustomInput>
                      )}
                    </Translate>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-11">
                  <div className="form-group">
                    <Translate>
                      {({ translate }) => (
                        <CustomInput type="text"
                                     className="material-control"
                                     label={translate('message')}
                                     name="message"
                                     value={this.state.data.message}
                                     onChange={this.handleChange}
                                     onBlur={this.handleBlur}
                                     submitted={this.state.submitted}
                                     multiline={true}
                                     validators={['maxLength:1000']}
                                     rows={6}
                                     errorMessages={[ERROR_MESSAGES.maxlength(1000)]}/>
                      )}</Translate>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-md-6 offset-md-5">
                  <div className="form-group apply-form-submit">
                    <button className="btn btn-success btn-lg"
                            type="submit"
                            onClick={this.onSubmitClick}
                            disabled={this.state.isLoading || this.state.isSiteLoading}>
                      <Translate id="send" />
                    </button>
                  </div>
                </div>
              </div>

            </CustomValidatorForm>

            <Dialog visible={this.state.isSuccessShowed}
                    onClose={this.onClose}>
              <div className="text-center">
                <p>
                   <CheckIcon></CheckIcon>
                </p>
                <p className="success-modal-heading">
                  <Translate id="form_submitted" />.
                </p>
                <p><Translate id="wait_sales" />.</p>
              </div>
            </Dialog>
          </div>
        </div>
    );
  }

}

export default withLocalize(ApplyForm);
