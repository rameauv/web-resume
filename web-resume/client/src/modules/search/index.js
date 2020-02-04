import initActions from './actionCreators';
import initReducer from './reducer';
import initMiddleware from './middleware';
import types from './types';

const configureUserModule = (services) => {
  const actions = initActions(types);
  const reducer = initReducer(types);
  const middleware = initMiddleware(types, services.userService);

  return {
    actions, reducer, middleware, types,
  };
};

export default configureUserModule;
