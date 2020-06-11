import React, { Component } from 'react';
import renderHTML from 'react-render-html';
import classNames from 'classnames';

import "./PostPreview.scss";
import {NavLink} from "react-router-dom";

export class PostPreview extends Component {
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
      <div className="post-preview" style={this.props.style}>
        {this.image && (
          <div className={classNames('post-preview__image', {
            'post-preview__image_is-loading': !this.state.isImageLoaded,
          })}>
            <img src={this.image} alt="" onLoad={() => this.setState({ isImageLoaded: true })} />
          </div>
        )}
        <div className="post-preview__caption">
          <NavLink to={`/blog/${this.post.slug}`}>
            {this.title}
          </NavLink>
        </div>
        <div className="post-preview__text">
          {renderHTML(this.preview)}
          <NavLink to={`/blog/${this.post.slug}`}>
            <span className="text-nowrap">Read more</span>
          </NavLink>
        </div>
      </div>
    );
  }
}

