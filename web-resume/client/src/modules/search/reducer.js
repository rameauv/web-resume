// @flow
/* eslint-disable no-case-declarations */
import { Action } from 'redux';
import { ITypes } from './contracts/ITypes';
import { IFetchFulfilledAction, ISetIsNewQuery } from './contracts/IActions';
import { IState } from './contracts/IState';

const reduceCurrentQuery = (types: ITypes, state: IState, action: IFetchFulfilledAction): IState => {
  const { payload } = action;
  const newState: IState = {
    ...state,
    currentQuery: payload,
  };
  return newState;
};

const reduceSearchFulfilled = (types: ITypes, state: IState, action: IFetchFulfilledAction): IState => {
  const { payload } = action;
  const newState: IState = {
    ...state,
    results: payload,
  };
  return newState;
};

const reduceSetIsNewQuery = (types: ITypes, state: IState, action: ISetIsNewQuery): IState => {
  const { payload } = action;
  const newState: IState = {
    ...state,
    isNewQuery: payload,
  };
  return newState;
};

const initReducer = (types: ITypes) => (state: IState, action: Action<string>): IState => {
  switch (action.type) {
    case types.SEARCH_SETCURRENTQUERY_FULFILLED:
      return reduceCurrentQuery(types, state, action);
    case types.SEARCH_FETCH_FULFILLED:
      return reduceSearchFulfilled(types, state, action);
    case types.SEARCH_ISNEWQUERY:
      return reduceSetIsNewQuery(types, state, action);
    default:
      return { ...state };
  }
};

export default initReducer;
