import configureUserModule from './user';
import configureSearchModule from './search';
import { extractActions, extractReducers, extractMiddlewares } from './extract';

const configureModules = async (services) => {
  const userModule = configureUserModule(services);
  const searchModule = configureSearchModule(services);

  const modules = {
    user: userModule,
    search: searchModule,
  };

  return {
    actions: extractActions(modules),
    reducers: extractReducers(modules),
    middlewares: extractMiddlewares(modules),
  };
};

export default configureModules;
