import api from 'api';
import * as AppActionTypes from '../actionTypes/app';

// Test action

export function testAction() {
  return {
    type: AppActionTypes.TEST_ACTION,
  };
}

// Async action example

function testAsyncStart() {
  return {
    type: AppActionTypes.TEST_ASYNC_ACTION_START,
  };
}

function testAsyncSuccess(data) {
  return {
    type: AppActionTypes.TEST_ASYNC_ACTION_SUCCESS,
    data,
  };
}

function testAsyncError(error) {
  return {
    type: AppActionTypes.TEST_ASYNC_ACTION_ERROR,
    error,
  };
}

export function testAsync() {
  return function (dispatch) {
    dispatch(testAsyncStart());

    api.testAsync()
      .then(data => dispatch(testAsyncSuccess(data)))
      .catch(error => dispatch(testAsyncError(error)));
  };
}

// Update
