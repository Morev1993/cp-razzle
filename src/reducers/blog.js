import { actionTypes } from '../actions/blog';

export const POSTS_STATE = {
  posts: [],
  currentPost: null,
  lastPosts: [],
  isPostsLoading: false,
  isCurrentPostLoading: false,
  isLastPostsLoading: false,
  pagination: {
    currentPage: 0,
    totalPages: 0,
  },
};

export default (state = POSTS_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_BLOG_POSTS:
      return {
        ...state,
        isPostsLoading: true,
      };

    case actionTypes.LOAD_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        isPostsLoading: false,
        posts: action.payload.posts,
        pagination: {
          ...state.pagination,
          totalPages: +action.payload.totalPages || 0,
        },
      };

    case actionTypes.LOAD_BLOG_POSTS_FAILURE:
      return {
        ...state,
        isPostsLoading: false,
      };

    case actionTypes.LOAD_CURRENT_BLOG_POST:
      return {
        ...state,
        isCurrentPostLoading: true,
      };

    case actionTypes.LOAD_CURRENT_BLOG_POST_SUCCESS:
      return {
        ...state,
        isCurrentPostLoading: false,
        currentPost: action.payload,
      };

    case actionTypes.LOAD_CURRENT_BLOG_POST_FAILURE:
      return {
        ...state,
        isCurrentPostLoading: false,
      };

    case actionTypes.LOAD_LAST_BLOG_POSTS:
      return {
        ...state,
        isLastPostsLoading: true,
      };

    case actionTypes.LOAD_LAST_BLOG_POSTS_SUCCESS:
      return {
        ...state,
        isLastPostsLoading: false,
        lastPosts: action.payload,
      };

    case actionTypes.LOAD_LAST_BLOG_POSTS_FAILURE:
      return {
        ...state,
        isLastPostsLoading: false,
      };

    case actionTypes.CHANGE_CURRENT_PAGE: {
      return {
        ...state,
        pagination: {
          ...state.pagination,
          currentPage: +action.payload || 0,
        },
      };
    }

    default:
      return state;
  }
}
