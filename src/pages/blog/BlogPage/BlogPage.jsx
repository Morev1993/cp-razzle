import React, { Component } from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';
import {Helmet} from 'react-helmet';
import { HEADER_LAYOUTS } from 'utils/options';

import { LastPostPreview } from '../LastPostPreview/LastPostPreview';
import { PostPreview } from '../PostPreview/PostPreview';
import Header from '../../../shared/parts/Header';
import BaseFooter from "../../../shared/parts/base-footer/BaseFooter";
import Pagination from '../../../shared/pagination/Pagination';

import './BlogPage.scss';
import {loadBlogPosts, changeCurrentPage} from "../../../actions/blog";
import Loader from "../../../shared/loader/Loader";

class BlogPage extends Component {
  constructor(props) {
    super(props);

    this.props.loadPosts();

    this.onChangePage = this.onChangePage.bind(this);
  }

  get lastPost() {
    return this.props.posts[0];
  }

  get oldPosts() {
    return this.props.posts.slice(1);
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    this.onChangePage({selected: 0});

  }

  onChangePage({ selected }) {
    window.scrollTo(0, 0);
    this.props.changeCurrentPage(selected);
  }

  render() {
    const { posts } = this.props;

    return (
      <div className="blog-page container typepage">
        <Helmet title="BLOG">
          <meta name="description" content="Stay tuned for Cardpay’s company updates, event announcements and blogs where we share our fintech expertise." />
        </Helmet>

        <Header layout={HEADER_LAYOUTS.secondaryPage} />

        {!this.props.isLoading && (
          <div className="row">
            <div className="blog-page__title col-12 col-md-6 offset-md-1">
              Blog
            </div>
          </div>
        )}

        {this.props.isLoading && (
          <Loader />
        )}

        {!!posts.length && !this.props.isLoading && (
          <div className="blog-page__posts">
            {posts.length > 0 && (<LastPostPreview post={this.lastPost} />)}

            {posts.length > 1 && (
              <div className="container px-0">
                <div className="row">
                  {this.oldPosts.map((post, idx) => (
                    <div
                      className={classNames('col-12 col-md-5 offset-md-1', {
                        'offset-md-1': !(idx % 2),
                      })}
                      style={{ marginTop: '64px' }}
                      key={post.id}
                    >
                      <PostPreview post={post} />
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {!this.props.isLoading && this.props.totalPages > 1 && (
          <Pagination
            style={{ marginTop: '45px' }}

            totalPages={this.props.totalPages}
            currentPage={this.props.currentPage}
            onChangePage={this.onChangePage}
          />
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

const mapStateToProps = (state) => {
  return {
    posts: state.blog.posts.sort((p1, p2) => {
      const p1Ts = new Date(p1.date);
      const p2Ts = new Date(p2.date);

      return p2Ts - p1Ts;
    }),
    currentPage: state.blog.pagination.currentPage,
    totalPages: state.blog.pagination.totalPages,
    isLoading: state.blog.isPostsLoading,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => ({
  loadPosts() {
    dispatch(loadBlogPosts());
  },
  changeCurrentPage(pageNum) {
    dispatch(changeCurrentPage(pageNum));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BlogPage);
