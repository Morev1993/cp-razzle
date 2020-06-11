import validator from 'validator';
import React  from 'react';
import {ValidatorForm} from "react-material-ui-form-validator";
import {environment} from "../environments";
import axios from "axios";


const numericCharacters = '\\d';
const latinCharacters = '[a-z]';
const upperLatinCharacters = '[A-Z]';
const spaceCharacter = '\\s';

const textCharacterRegExp = '('+ Array.prototype.join.call([numericCharacters, upperLatinCharacters,
  latinCharacters, spaceCharacter], '|') + '|;|:|&|\\(|\\)|_|-|,|\\.|\\/|\\\\)';
const textValidatorRegExp = '^'+ textCharacterRegExp +'+$';

const addressValidatorRegExp = textValidatorRegExp;
const nameValidatorRegExp = /(^[A-Za-z0-9.`/\\]+([A-Za-z0-9-—\s\\/`.]+)?[A-Za-z0-9./\\`]+$)|^[A-Za-z0-9.`/\\]$/;
const industryValidatorRegExp = /(^[A-Za-z0-9-—.`/\\]+([A-Za-z0-9-—\s\\/`.]+)?[A-Za-z0-9-—./\\`]+$)|^[A-Za-z0-9-—.`/\\]$/;
const phoneValidatorRegExp = /(^\+\d{4,19}$)|(^\d{5,20}$)/;

export const ERROR_MESSAGES = {
  required: () => 'This field is required',
  email: () => 'Invalid email',
  minlength: (value) => `Please enter at least ${value} characters`,
  maxlength: (value) => `Please enter no more than ${value} characters`,
  phoneNumber: () => 'Invalid phone',
  number: () => 'Invalid number',
  invalid: () => 'This field has an invalid characters.',
  siteUrl: () => 'Invalid website',
  name: () => 'Invalid name',
  company: () => 'Invalid company name',
  industry: () => 'Invalid industry',
};

function renderError(error) {
  return <div className="error-message">{error}</div>;
}

export const isEmailValidator = (value) => {
  return validator.isEmail(value);
};

export const minLengthValidator = (value, length) => {
  return value.toString().trim().length > +length - 1;
};

export const maxLengthValidator = (value, length) => {
  return value.toString().trim().length < +length + 1;
};

export const siteUrlValidator = (value) => {
  if (!isWebsite(value)) {
    return renderError(ERROR_MESSAGES.siteUrl());
  }
};

export const isWebsite = (value) => {
  return validator.isURL(value) && !validator.isEmail(value)
}

export const phoneValidator = (value) => {
  if (!validator.isNumeric(value)) {
    return renderError(ERROR_MESSAGES.phoneNumber());
  }
};

export const isPhoneValidator = value => {
  return phoneValidatorRegExp.test(value);
};

export const isTextValidator = (value) => {
  return new RegExp(textValidatorRegExp).test(value);
};

export const isAddressValidator = value => {
  return new RegExp(addressValidatorRegExp).test(value);
};

export const isIndustryValidator = value => {
  return industryValidatorRegExp.test(value);
};

export const isNameValidator = value => {
  return nameValidatorRegExp.test(value);
};

export const isLatinTextValidator = (value) => {
  return !!/(^\S[A-Za-z0-9!@#$%^&*\s()_+=\-—~|/<>'"`•π√÷×¶∆}{°¥€¢£©®™№✓[\]\\;:.,?]*\S$)|^(\S)$/.test(value);
};

export function isSiteOnline(url, callback, cancelToken) {
  axios({
    method: 'get',
    url: `${environment.pipedrive_api_url}/proxy?url=${url}`,
    cancelToken
  })
    .then(() => {
      callback(true);
    })
    .catch( () => {
      callback(false);
    })
}

export class CustomValidatorForm extends ValidatorForm {
  componentDidMount() {
    ValidatorForm.addValidationRule('maxLength', (value, length) => {
      return maxLengthValidator(value, length);
    });

    ValidatorForm.addValidationRule('minLength', (value, length) => {
      return minLengthValidator(value, length);
    });

    ValidatorForm.addValidationRule('isUrl', (value) => {
      return isWebsite(value);
    });

    ValidatorForm.addValidationRule('isPhone', (value) => {
      return isPhoneValidator(value);
    });

    ValidatorForm.addValidationRule('isAddress', (value) => {
      return isAddressValidator(value);
    });

    ValidatorForm.addValidationRule('isIndustry', (value) => {
      return isIndustryValidator(value);
    });

    ValidatorForm.addValidationRule('isName', (value) => {
      return isNameValidator(value);
    });

    ValidatorForm.addValidationRule('isText', (value) => {
      return isTextValidator(value);
    });

    ValidatorForm.addValidationRule('isEmail', (value) => {
      return isEmailValidator(value);
    });

    ValidatorForm.addValidationRule('isLatinText', (value) => {
      return isLatinTextValidator(value);
    });

    ValidatorForm.addValidationRule('isRequired', (value) => {
      return !!value && value;
    });

  }
}
