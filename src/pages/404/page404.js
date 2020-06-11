import React from 'react';

import Header from 'shared/parts/Header';
import { HEADER_LAYOUTS } from 'utils/options';
import BaseFooter from "../../shared/parts/base-footer/BaseFooter";

import "./page404.scss";
import {NavLink} from "react-router-dom";

import image from '../../assets/404.svg';

export class Page404 extends React.Component {
  render() {
    return (
      <div className="typepage">
        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        <div className="container page-404 text-center">
          <div className="row">
            <div className="col-12 col-md-10 offset-md-1">
              <h1>Page not found</h1>

              <img src={image} alt="404" />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <p>
                We are sorry but the page you’re looking for can’t be found. <br/> If you want to know more about our product, please click <NavLink to="/home">here</NavLink>.
              </p>
            </div>
          </div>
        </div>

        <BaseFooter></BaseFooter>

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />
      </div>
    );
  }
}
