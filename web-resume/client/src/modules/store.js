import logger from 'redux-logger';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';
import { User } from '../model/User';

export type IMainState = {
  search: {
    isNewQuery: Boolean,
    currentQuery: string,
    results: Array<User>,
  },
  user: {
    loginState: string,
    user: User,
    fetchedUser: User,
  },
};

function configureStore(reducers, middlewares, store: IMainState = {
  search: {
    isNewQuery: false,
    currentQuery: '',
    results: [],
  },
  user: {
    loginState: 'NO',
    user: null,
    fetchedUser: null,
  },
}) {
  const rootReducer = combineReducers({
    user: reducers.user,
    search: reducers.search,
  });
  const flatMdls = Object.values(middlewares).flat();
  const middleware = applyMiddleware(thunk, logger, ...flatMdls);
  return createStore(rootReducer, store, middleware);
}

export default configureStore;
