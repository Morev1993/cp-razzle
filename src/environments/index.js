import * as environment_dev from './development';
import * as environment_test from './test';
import * as environment_prod from './production';

function getEnvironment() {
  const env = process.env.NODE_ENV;

  if (env === 'development') {
    return environment_dev.environment;
  }

  if (env === 'test') {
    return environment_test.environment;
  }

  if (window.location.hostname === 'testsite.cardpay-test.com') {
    return environment_test.environment;
  }

  return environment_prod.environment;
}

export const environment = getEnvironment();
