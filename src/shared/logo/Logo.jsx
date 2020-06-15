import React from 'react';
import { Link } from 'react-router-dom';
// import { ReactComponent as CardpayLogo } from 'assets/cardpay-logo-180.svg';
import { ReactComponent as CardpayLogo } from 'assets/logo/cardpay_logo_370x166.svg';
import { ReactComponent as CardpayLogoXs } from 'assets/cardpay_logo_xs.svg';


const renderLogo = (props) => {
  if (props.layout === 'base') {
    return (<CardpayLogo />);
  }

  if (props.layout === 'secondary-page') {
    return (<CardpayLogoXs />);
  }

  if (props.layout === 'sticky') {
    return (<CardpayLogoXs />);
  }

  return '';
};

const Logo = (props) => (
  <Link to="/">
    {renderLogo(props)}
  </Link>
);

export default Logo;
