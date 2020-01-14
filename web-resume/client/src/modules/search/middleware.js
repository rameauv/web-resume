import { ITypes } from './contracts/ITypes';
import { IFetchAction, IFetchFulfilledAction } from './contracts/IActions';
import { Action } from 'redux';
import { IUserService } from '../../services/IUserService';

const initMiddleware = (types: ITypes, userService: IUserService) => {

  const fetch = () => (next) => async (action: Action) => {
    next(action);
    if (action.type !== types.SEARCH_FETCH) {
      return;
    }
    const castedAction: IFetchAction = action;
    const { query } = castedAction;
    const res = await userService.fetchUsersByQuery(query);
    const resAction: IFetchFulfilledAction = {
      type: types.SEARCH_FETCH_FULFILLED,
      payload: res,
    };
  };
  return [fetch];
};

export default initMiddleware;
