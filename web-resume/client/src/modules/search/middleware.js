import { Store } from 'redux';
import { ITypes } from './contracts/ITypes';
import {
  IFetchAction,
  IFetchFulfilledAction,
  ISetCurrentQueryAction,
  ISetCurrentQueryFulfilledAction,
  ISetIsNewQueryAction,
} from './contracts/IActions';
import { IUserService } from '../../services/IUserService';
import { IMainState } from '../store';

const initMiddleware = (types: ITypes, userService: IUserService) => {
  const fetch = (store: Store<IMainState>) => (next) => async (action: IFetchAction) => {
    next(action);
    if (action.type !== types.SEARCH_FETCH) {
      return;
    }
    const state = store.getState();
    if (!state.search.isNewQuery) {
      return;
    }
    const { dispatch } = store;
    const { payload } = action;
    const res = await userService.fetchUsersByQuery(payload);
    const resAction: IFetchFulfilledAction = {
      type: types.SEARCH_FETCH_FULFILLED,
      payload: res,
    };
    const setIsNewQueryAction: ISetIsNewQueryAction = {
      type: types.SEARCH_ISNEWQUERY,
      payload: false,
    };
    dispatch(setIsNewQueryAction);
    dispatch(resAction);
  };

  const setCurrentQuery = (store: Store<IMainState>) => (next) => (action: ISetCurrentQueryAction) => {
    next(action);
    if (action.type !== types.SEARCH_SETCURRENTQUERY) {
      return;
    }
    const { payload } = action;
    const state = store.getState();
    if (state.search.currentQuery === payload) {
      return;
    }
    const { dispatch } = store;
    const setCurrentQueryFulfilledAction: ISetCurrentQueryFulfilledAction = {
      type: types.SEARCH_SETCURRENTQUERY_FULFILLED,
      payload,
    };
    const isNewQueryAction: ISetIsNewQueryAction = {
      type: types.SEARCH_ISNEWQUERY,
      payload: true,
    };
    dispatch(setCurrentQueryFulfilledAction);
    dispatch(isNewQueryAction);
  };

  return [fetch, setCurrentQuery];
};

export default initMiddleware;
