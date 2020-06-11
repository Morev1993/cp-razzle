import { actionTypes } from '../actions/careers';

const initialState = {
  posts: [],
  currentPost: null,
  lastPosts: [],
  isPostsLoading: false,
  isCurrentPostLoading: false,
  isLastPostsLoading: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.LOAD_CAREERS_POSTS:
      return {
        ...state,
        isPostsLoading: true,
      };

    case actionTypes.LOAD_CAREERS_POSTS_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        posts: action.payload,
      };

    case actionTypes.LOAD_CAREERS_POSTS_FAILURE:
      return {
        ...state,
        isPostsLoading: false,
      };

    case actionTypes.LOAD_CAREERS_POST:
      return {
        ...state,
        isCurrentPostLoading: true,
      };

    case actionTypes.LOAD_CAREERS_POST_SUCCESS:
      return {
        ...state,
        isCurrentPostLoading: false,
        currentPost: action.payload,
      };

    case actionTypes.LOAD_CAREERS_POST_FAILURE:
      return {
        ...state,
        isCurrentPostLoading: false,
      };

    case actionTypes.LOAD_CAREERS_LAST_POSTS:
      return {
        ...state,
        isLastPostsLoading: true,
      };

    case actionTypes.LOAD_CAREERS_LAST_POSTS_SUCCESS:
      return {
        ...state,
        isLastPostsLoading: false,
        lastPosts: action.payload,
      };

    case actionTypes.LOAD_CAREERS_LAST_POSTS_FAILURE:
      return {
        ...state,
        isLastPostsLoading: false,
      };

    default:
      return state;
  }
}
