import React, { Component, } from "react";
import ReactGA from 'react-ga';
import {environment} from "environments";

if (!!environment.gaId) {
  ReactGA.initialize(environment.gaId, {
    debug: !!localStorage.getItem('cp_ga_debug')
  });
}

const withTracker = (WrappedComponent, options = {}) => {
  const trackPage = page => {
    if (!environment.gaId) {
      return;
    }
    ReactGA.set({
      page,
      ...options,
    });
    ReactGA.pageview(page);
  };

  // eslint-disable-next-line
  const HOC = class extends Component {
    componentDidMount() {
      // eslint-disable-next-line
      const page = this.props.location.pathname + this.props.location.search;
      trackPage(page);
    }

    componentDidUpdate(prevProps) {
      const currentPage =
        prevProps.location.pathname + prevProps.location.search;
      const nextPage =
        this.props.location.pathname + this.props.location.search;

      if (currentPage !== nextPage) {
        trackPage(nextPage);
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };

  return HOC;
};

export default withTracker;
