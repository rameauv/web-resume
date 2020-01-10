import apiRepositoryInit from './repositories/apiRepository/apiRepository';
import jwtRepositoryInit from './repositories/jwtRepository';
import userServiceInit  from './services/userService';
import jwtServiceInit from './services/jwtService';

export default function () {
  const apiRepository = apiRepositoryInit('/api');
  const jwtRepository = jwtRepositoryInit();
  const jwtService = jwtServiceInit(jwtRepository);
  const userService = userServiceInit(jwtService, apiRepository);
  return {
    jwtService,
    userService,
  };
};