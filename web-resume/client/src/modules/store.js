import logger from 'redux-logger';
import {
  createStore,
  applyMiddleware,
  combineReducers,
} from 'redux';
import thunk from 'redux-thunk';

export type Store = {
  search: {
    currentQuery: string,
    results: Array,
  },
  user: {
    loginState: string,
    user: Object,
    fetchedUser: Object,
  },
};

function configureStore(reducers, middlewares, store: Store = {
  search: {
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
  });
  const flatMdls = Object.values(middlewares).flat();
  const middleware = applyMiddleware(thunk, logger, ...flatMdls);
  return createStore(rootReducer, store, middleware);
}

export default configureStore;