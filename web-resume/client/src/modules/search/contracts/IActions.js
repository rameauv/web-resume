import { Action } from 'redux';

export interface ISetCurrentQueryAction extends Action<string> {
  payload: string
}

export interface ISetCurrentQueryFulfilledAction extends Action<string> {
  payload: string
}

export interface IFetchAction extends Action<string> {
  payload: string
}

export interface IFetchFulfilledAction extends Action<string> {
  payload: Array
}

export interface ISetIsNewQueryAction extends Action<string> {
  payload: Boolean
}
