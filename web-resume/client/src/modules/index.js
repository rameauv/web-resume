import configureUserModule from './user';
import { extractActions, extractReducers, extractMiddlewares } from './extract';

const configureModules = async (services) => {
  const userModule = configureUserModule(services);

  const modules = {
    user: userModule,
  };

  return {
    actions: extractActions(modules),
    reducers: extractReducers(modules),
    middlewares: extractMiddlewares(modules),
  };
};

export default configureModules;
