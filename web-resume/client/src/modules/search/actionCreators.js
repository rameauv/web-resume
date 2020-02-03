import { Dispatch } from 'redux';
import { ITypes } from './contracts/ITypes';
import { ISetCurrentQueryAction, IFetchAction, ISetIsNewQueryAction } from './contracts/IActions';

const initActions = (types: ITypes) => {
  const currentQueryAction = (payload: string) => (dispatch: Dispatch<ISetCurrentQueryAction>) => {
    const action: ISetCurrentQueryAction = {
      type: types.SEARCH_SETCURRENTQUERY,
      payload,
    };
    dispatch(action);
  };

  const fetchAction = (payload: string) => (dispatch: Dispatch<IFetchAction>) => {
    const action: IFetchAction = {
      type: types.SEARCH_FETCH,
      payload,
    };
    dispatch(action);
  };

  const setIsNewQueryAction = (payload: Boolean) => (dispatch: Dispatch<ISetIsNewQueryAction>) => {
    const action: ISetIsNewQueryAction = {
      type: types.SEARCH_ISNEWQUERY,
      payload,
    };
    dispatch(action);
  };

  return {
    currentQueryAction,
    fetchAction,
    setIsNewQueryAction,
  };
};

export default initActions;
