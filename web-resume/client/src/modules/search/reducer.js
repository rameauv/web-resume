// @flow
/* eslint-disable no-case-declarations */
import { Action } from 'redux';
import { ITypes } from './contracts/ITypes';
import { ICurrentQuerryAction, IFetchFulfilledAction } from './contracts/IActions';
import { IState } from './contracts/IState';

const reduceCurrentQuery = (types: Types, state: IState, action: IFetchFulfilledAction): IState => {
  const { payload } = action;
  const newState: IState = {
    ...state,
    currentQuery: payload,
  };
  return (newState);
};

const reduceSearchFulfilled = (types: Types, state: IState, action: IFetchFulfilledAction): IState => {
  const { payload } = action;
  const newState: IState = {
    ...state,
    results: payload,
  };
  return (newState);
};

const initReducer = (types: ITypes) => (state: IState, action: Action<string>): IState => {
  switch (action.type) {
    case types.SEARCH_CURRENTQUERY:
      return (reduceCurrentQuery(types, state, action));
    case types.SEARCH_FETCH_FULFILLED:
      return (reduceSearchFulfilled(types, state, action));
    default:
      return { ...state };
  }
};

export default initReducer;
