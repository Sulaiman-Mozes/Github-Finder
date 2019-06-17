import * as types from '../actionTypes';

export default (state, action) => {
  switch (action.type) {
    case types.SET_ALERT:
      return {
        ...state,
        alert: {
          ...state.alert,
          msg: action.payload.msg,
          type: action.payload.type,
        },
      };
    case types.REMOVE_ALERT:
      return {
        ...state,
        alert: null,
      };
    default:
      return state;
  }
}