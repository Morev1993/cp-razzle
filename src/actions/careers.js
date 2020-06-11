import {environment} from "../environments";

export const actionTypes = {
  LOAD_CAREERS_POSTS: '[Careers] LOAD_CAREERS_POSTS',
  LOAD_CAREERS_POSTS_SUCCESS: '[Careers] LOAD_CAREERS_POSTS_SUCCESS',
  LOAD_CAREERS_POSTS_FAILURE: '[Careers] LOAD_CAREERS_POSTS_FAILURE',

  LOAD_CAREERS_POST: '[Careers] LOAD_CAREERS_POST',
  LOAD_CAREERS_POST_SUCCESS: '[Careers] LOAD_CAREERS_POST_SUCCESS',
  LOAD_CAREERS_POST_FAILURE: '[Careers] LOAD_CAREERS_POST_FAILURE',

  LOAD_CAREERS_LAST_POSTS: '[Careers] LOAD_CAREERS_LAST_POSTS',
  LOAD_CAREERS_LAST_POSTS_SUCCESS: '[Careers] LOAD_CAREERS_LAST_POSTS_SUCCESS',
  LOAD_CAREERS_LAST_POSTS_FAILURE: '[Careers] LOAD_CAREERS_LAST_POSTS_FAILURE',
};

export const loadCareersPostsStart = () => ({
  type: actionTypes.LOAD_CAREERS_POSTS,
});

export const loadCareersPostsSuccess = (posts) => ({
  type: actionTypes.LOAD_CAREERS_POSTS_SUCCESS,
  payload: posts,
});

export const loadCareersPostsFailure = () => ({
  type: actionTypes.LOAD_CAREERS_POSTS_FAILURE,
});

export const loadCareersPosts = () => {
  return (dispatch) => {
    dispatch(loadCareersPostsStart());

    window.fetch(`${environment.wp_api}/wp/v2/posts&categories=3`)
      .then(res => res.json())
      .then(data => dispatch(loadCareersPostsSuccess(data)))
      .catch(() => dispatch(loadCareersPostsFailure()));
  };
};

export const loadCareersPostStart = () => ({
  type: actionTypes.LOAD_CAREERS_POST,
});

export const loadCareersPostSuccess = (post) => ({
  type: actionTypes.LOAD_CAREERS_POST_SUCCESS,
  payload: post,
});

export const loadCareersPostFailure = () => ({
  type: actionTypes.LOAD_CAREERS_POST_FAILURE,
});

export const loadCareersPost = (postId) => {
  return (dispatch) => {
    dispatch(loadCareersPostStart());

    window.fetch(`${environment.wp_api}/wp/v2/posts&categories=3&include[]=${postId}`)
      .then(res => res.json())
      .then(data => dispatch(loadCareersPostSuccess(data[0])))
      .catch(() => dispatch(loadCareersPostFailure()));
  }
};

export const loadCareersLastPostsStart = () => ({
  type: actionTypes.LOAD_CAREERS_LAST_POSTS,
});

export const loadCareersLastPostsSuccess = (post) => ({
  type: actionTypes.LOAD_CAREERS_LAST_POSTS_SUCCESS,
  payload: post,
});

export const loadCareersLastPostsFailure = () => ({
  type: actionTypes.LOAD_CAREERS_LAST_POSTS_FAILURE,
});

export const loadCareersLastPosts = (postId) => {
  return (dispatch) => {
    dispatch(loadCareersLastPostsStart());

    window.fetch(`${environment.wp_api}/wp/v2/posts&categories=3&include[]=${postId}`)
      .then(res => res.json())
      .then(data => dispatch(loadCareersLastPostsSuccess(data[0])))
      .catch(() => dispatch(loadCareersLastPostsFailure()));
  }
};
