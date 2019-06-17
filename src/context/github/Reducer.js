import * as types from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case types.SEARCH_USERS:
      return {
        ...state,
        searchError: null,
        users: action.payload,
        loading: false,
      };
    case types.GET_USER:
      return {
        ...state,
        userError: null,
        user: action.user,
        repos: action.repos,
        loading: false,
      };
    case types.GET_USER_FAILURE:
      return {
        ...state,
        userError: action.payload,
        loading: false,
      };
    case types.GET_USERS_FAILURE:
      return {
        ...state,
        usersError: action.payload,
        loading: false,
      };
    case types.GET_ALL_USERS:
      return {
        ...state,
        usersError: null,
        users: action.payload,
        loading: false,
      };
    case types.CLEAR_USERS:
      return {
        ...state,
        users: [],
      };
    case types.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    default:
      return state;
  }
}