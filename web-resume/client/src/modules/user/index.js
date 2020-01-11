import initActions from './actions';
import initReducer from './reducer';
import initMiddleware from './middleware';
import types from './types';

const configureUserModule = (services) => {
  const usedServices = {
    userService: services.userService,
    jwtService: services.jwtService,
  };
  const actions = initActions(types);
  const reducer = initReducer(types);
  const middleware = initMiddleware(types, usedServices);

  return {
    actions, reducer, middleware, types,
  };
};

export default configureUserModule;
