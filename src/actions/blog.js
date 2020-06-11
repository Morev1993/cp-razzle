import {environment} from "../environments";

export const actionTypes = {
  LOAD_BLOG_POSTS: '[Blog] LOAD_BLOG_POSTS',
  LOAD_BLOG_POSTS_SUCCESS: '[Blog] LOAD_BLOG_POSTS_SUCCESS',
  LOAD_BLOG_POSTS_FAILURE: '[Blog] LOAD_BLOG_POSTS_FAILURE',

  LOAD_CURRENT_BLOG_POST: '[Blog] LOAD_CURRENT_BLOG_POST',
  LOAD_CURRENT_BLOG_POST_SUCCESS: '[Blog] LOAD_CURRENT_BLOG_POST_SUCCESS',
  LOAD_CURRENT_BLOG_POST_FAILURE: '[Blog] LOAD_CURRENT_BLOG_POST_FAILURE',

  LOAD_LAST_BLOG_POSTS: '[Blog] LOAD_LAST_BLOG_POSTS',
  LOAD_LAST_BLOG_POSTS_SUCCESS: '[Blog] LOAD_LAST_BLOG_POSTS_SUCCESS',
  LOAD_LAST_BLOG_POSTS_FAILURE: '[Blog] LOAD_LAST_BLOG_POSTS_FAILURE',

  CHANGE_CURRENT_PAGE: '[Blog] CHANGE_CURRENT_PAGE',
};

export const loadBlogPostsStart = () => ({
  type: actionTypes.LOAD_BLOG_POSTS,
});

export const loadBlogPostsSuccess = (posts, totalPages) => ({
  type: actionTypes.LOAD_BLOG_POSTS_SUCCESS,
  payload: { posts, totalPages },
});

export const loadBlogPostsFailure = () => ({
  type: actionTypes.LOAD_BLOG_POSTS_FAILURE,
});

export const loadBlogPosts = () => {
  return (dispatch, getState) => {
    dispatch(loadBlogPostsStart());

    const { currentPage } = getState().blog.pagination;

    if (typeof window === 'undefined') {
      return;
    }

    window.fetch(`${environment.wp_api}/wp/?rest_route=/wp/v2/posts&categories=2&_embed=true&per_page=3&offset=${currentPage * 3}`)
      .then(res => Promise.all([res.headers, res.json()]))
      .then(([headers, data]) => {
        const totalPages = headers.get('X-WP-TotalPages');

        dispatch(loadBlogPostsSuccess(data, totalPages));
      })
      .catch(() => dispatch(loadBlogPostsFailure()));
  };
};

export const loadCurrentBlogPostStart = () => ({
  type: actionTypes.LOAD_CURRENT_BLOG_POST,
});

export const loadCurrentBlogPostSuccess = (post) => ({
  type: actionTypes.LOAD_CURRENT_BLOG_POST_SUCCESS,
  payload: post,
});

export const loadCurrentBlogPostFailure = () => ({
  type: actionTypes.LOAD_CURRENT_BLOG_POST_FAILURE,
});

export const loadCurrentBlogPost = (postSlug) => {
  return (dispatch) => {
    dispatch(loadCurrentBlogPostStart());

    if (typeof window === 'undefined') {
      return;
    }

    window.fetch(`${environment.wp_api}/wp/?rest_route=/wp/v2/posts&categories=2&_embed=true&slug=${postSlug}`)
      .then(res => res.json())
      .then(data => dispatch(loadCurrentBlogPostSuccess(data[0])))
      .catch(() => dispatch(loadCurrentBlogPostFailure()));
  };
};

export const loadLastBlogPostsStart = () => ({
  type: actionTypes.LOAD_LAST_BLOG_POSTS,
});

export const loadLastBlogPostsSuccess = (posts) => ({
  type: actionTypes.LOAD_LAST_BLOG_POSTS_SUCCESS,
  payload: posts,
});

export const loadLastBlogPostsFailure = () => ({
  type: actionTypes.LOAD_LAST_BLOG_POSTS_FAILURE,
});

export const loadLastBlogPosts = () => {
  return (dispatch) => {
    dispatch(loadLastBlogPostsStart());

    if (typeof window === 'undefined') {
      return;
    }

    window.fetch(`${environment.wp_api}/wp/v2/posts&categories=2&per_page=4`)
      .then(res => res.json())
      .then(data => dispatch(loadLastBlogPostsSuccess(data)))
      .catch(() => dispatch(loadLastBlogPostsFailure()));
  };
};

export const changeCurrentPageStart = (pageNum) => ({
  type: actionTypes.CHANGE_CURRENT_PAGE,
  payload: pageNum,
});

export const changeCurrentPage = (pageNum) => {
  return (dispatch) => {
    dispatch(changeCurrentPageStart(pageNum));

    dispatch(loadBlogPosts());
  };
};
