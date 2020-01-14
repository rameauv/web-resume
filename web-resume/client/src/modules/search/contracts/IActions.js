import { Action } from 'redux';

export interface ICurrentQuerryAction extends Action<string> {
  payload: string
}

export interface IFetchAction extends Action<string> {
  payload: string
}

export interface IFetchFulfilledAction extends Action<string> {
  payload: Array
}
