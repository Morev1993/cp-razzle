import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import {NavLink} from "react-router-dom";
import classNames from 'classnames';

import "./LastPostPreview.scss";

export class LastPostPreview extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isImageLoaded: false,
    };
  }

  get post() {
    return this.props.post || {};
  }

  get embedded() {
    return this.post._embedded;
  }

  get title() {
    return this.post.title && this.post.title.rendered;
  }

  get preview() {
    return this.post.excerpt && this.post.excerpt.rendered;
  }

  get image() {
    const embedded = this.embedded || {};
    const media = embedded['wp:featuredmedia'];

    if (media && media[0]) {
      const image = media[0];
      return image.source_url;
    }

    return null;
  }

  render() {
    return (
      <div className="last-post-preview container px-0">
        <div className="row">
          <div className="last-post-preview__caption d-none d-md-block col-5 offset-1">
            <NavLink to={`/blog/${this.post.slug}`}>{this.title}</NavLink>
          </div>
          {this.image && (
            <div className={classNames('last-post-preview__image col-12 col-md-6', {
              'last-post-preview__image_is-loading': !this.state.isImageLoaded,
            })}>
              <img src={this.image} alt="" onLoad={() => this.setState({ isImageLoaded: true })} />
            </div>
          )}
          <div className="last-post-preview__caption d-md-none col-12 font-weight-bold" style={{ marginTop: '20px' }}>
            <NavLink to={`/blog/${this.post.slug}`}>{this.title}</NavLink>
          </div>
        </div>
        <div className="last-post-preview__content row" style={{ marginTop: '13px' }}>
          <div className="col-12 col-md-11 offset-md-1">
            {renderHTML(this.preview)}
            <NavLink to={`/blog/${this.post.slug}`}>
              <span className="text-nowrap">Read more</span>
            </NavLink>
          </div>
        </div>
      </div>
    );
  }
}

