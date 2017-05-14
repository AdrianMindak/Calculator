import { Map } from 'immutable';

import * as AppActionTypes from '../actionTypes/app';

const initialState = Map({
  counter: 0,
  asyncLoading: false,
  asyncError: null,
  asyncData: null,
});

const actionsMap = {
  [AppActionTypes.TEST_ACTION]: (state) => {
    const counter = state.get('counter') + 1;

    return state.merge({
      counter,
    });
  },

  // Async action
  [AppActionTypes.TEST_ASYNC_ACTION_START]: (state) => {
    return state.merge({
      asyncLoading: true,
      asyncError: null,
    });
  },
  [AppActionTypes.TEST_ASYNC_ACTION_ERROR]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncError: action.data,
    });
  },
  [AppActionTypes.TEST_ASYNC_ACTION_SUCCESS]: (state, action) => {
    return state.merge({
      asyncLoading: false,
      asyncData: action.data,
    });
  },
};

export default function reducer(state = initialState, action = {}) {
  const fn = actionsMap[action.type];
  return fn ? fn(state, action) : state;
}
