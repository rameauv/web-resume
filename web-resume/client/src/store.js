import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

function configureStore(reducers, middlewares, store = {
  user: {
    loginState: 'NO',
    user: null,
    fetchedUser: null,
  },
}) {
  const rootReducer = combineReducers({ user: reducers.user });
  const flatMdls = Object.values(middlewares).flat();
  const middleware = applyMiddleware(thunk, logger, ...flatMdls);
  return createStore(rootReducer, store, middleware);
}

export default configureStore;
