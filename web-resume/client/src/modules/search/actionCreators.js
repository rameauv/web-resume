import { ITypes } from './contracts/ITypes';
import { ICurrentQuerryAction } from './contracts/IActions';
import { Dispatch } from 'redux';

const initActions = (types: ITypes) => {
  const currentQuerryAction = (payload: string) => (dispatch: Dispatch<ICurrentQuerryAction>) => {
    const action: ICurrentQuerryAction = {
      type: types.SEARCH_CURRENTQUERY,
      payload,
    };
    dispatch(action);
  };

  return {
    currentQuerryAction,
  };
};

export default initActions;
