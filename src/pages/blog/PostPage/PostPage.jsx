import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { connect } from 'react-redux';
import renderHTML from 'react-render-html';
import * as moment from 'moment';
import { HEADER_LAYOUTS } from 'utils/options';

import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";
import Header from '../../../shared/parts/Header';

import './PostPage.scss';
import {loadCurrentBlogPost, loadLastBlogPosts} from "../../../actions/blog";
import Loader from "../../../shared/loader/Loader";
import {Helmet} from "react-helmet";
import {removeHtml} from "../../../utils/helpers";

class PostPage extends Component {
  constructor(props) {
    super(props);

    this.loadData(this.props.postSlug);
  }

  componentWillReceiveProps(nextProps, nextContext) {
    if (nextProps.postSlug !== this.props.postSlug) {
      this.props.loadPost(nextProps.postSlug);
      this.props.loadLastPosts();
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  loadData(postSlug) {
    this.props.loadPost(postSlug);
    this.props.loadLastPosts();
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

  get author() {
    return this.embedded && this.embedded.author && this.embedded.author[0];
  }

  get authorName() {
    return this.author && this.author.name;
  }

  get date() {
    const { date } = this.post;

    return date ? moment(date).format('DD MMMM YYYY HH:mm') : date;
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

  get content() {
    return this.post.content && this.post.content.rendered;
  }

  get description() {
    return this.post.excerpt && this.post.excerpt && removeHtml(this.post.excerpt.rendered);
  }

  render() {
    const { lastPosts } = this.props;

    return (
      <div className="post-page container typepage">
        <Helmet title={this.title}>
          <meta property="og:title" content={this.title}/>
          <meta property="og:description" content={this.description}/>
          <meta property="og:image" content={this.image}/>
          {/* <meta property="og:url" content={window.location.href}/> */}
          <meta property="twitter:title" content={this.title}/>
          <meta property="twitter:description" content={this.description}/>
          <meta property="twitter:image" content={this.image}/>
          <meta name="twitter:card" content="summary_large_image"/>
        </Helmet>

        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        {this.props.isLoading && (
          <Loader />
        )}

        {!this.props.isLoading && (
          <div className="row">
            <div className="col-12 col-md-1">
              <div className="post-page__back">
                <NavLink to="/blog">
                  <svg width="52" height="52" viewBox="0 0 52 52">
                    <g fill="none" fillRule="evenodd" transform="translate(1 1)">
                      <circle cx="25" cy="25" r="25" fill="#FFF" stroke="#007AFF"/>
                      <path fill="#007AFF" fillRule="nonzero" d="M11.409 25.143l6.336 3.564-.49.872-8-4.5v-.872l8-4.5.49.872-6.336 3.564H40v1H11.409z"/>
                    </g>
                  </svg>
                </NavLink>
              </div>
            </div>

            <div className="post-page__caption col-12 col-md-7 d-flex">{this.title}</div>

            <div className="post-page__nav d-none d-md-block col-2 offset-2">
              <ul className="p-0">
                {lastPosts.filter(p => p.id !== this.post.id).splice(0, 3).map((post) => (
                  <li key={post.id} className="my-3">
                    <NavLink to={`/blog/${post.slug}`}>{post.title.rendered}</NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {!this.props.isLoading && (
          <div className="row align-items-end" style={{ marginTop: '20px' }}>
            <div className="col-12 col-md-2 offset-md-1">
              <div className="post-page__created-by">
                by {this.authorName}<br/>{this.date}
              </div>
            </div>
            <div className="col-12 col-md-6">
              {!!this.image && (
                <div className="post-page__image">
                  <img src={this.image} alt="" />
                </div>
              )}
            </div>
          </div>
        )}

        {!this.props.isLoading && (
          <div className="post-page__content row" style={{ marginTop: '100px' }}>
            <div className="col-12 col-md-8 offset-md-2">
              {this.content ? renderHTML(this.content) : ''}
            </div>
          </div>
        )}

        {!this.props.isLoading && (
          <div className="row" style={{ marginTop: '60px', marginBottom: '50px' }}>
            {/*posts.filter((p) => p.id !== this.post.id).map((post, idx) => (
              <div
                className={classNames('col-12 col-md-5', {
                  'offset-md-1': !(idx % 2),
                })}
                key={post.id}
              >
                <PostPreview post={post} />
              </div>
            ))*/}
          </div>
        )}

        {!this.props.isLoading && (
          <BaseFooter />
        )}

        <Header
          pages={true}
          layout={HEADER_LAYOUTS.base}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  const postSlug = props.match.params.postSlug;
  const post = state.blog.currentPost;
  const lastPosts = state.blog.lastPosts;

  return {
    postSlug,
    post,
    lastPosts,
    isLoading: state.blog.isCurrentPostLoading,
  }
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPost(postId) {
    dispatch(loadCurrentBlogPost(postId));
  },
  loadLastPosts() {
    dispatch(loadLastBlogPosts());
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(PostPage);
