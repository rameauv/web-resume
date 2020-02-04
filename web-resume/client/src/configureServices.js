import apiRepositoryInit from './repositories/user/implementation/apiRepository';
import jwtRepositoryInit from './repositories/jwt/implementation/jwtRepository';
import userServiceInit from './services/implementation/userService';
import jwtServiceInit from './services/implementation/jwtService';

export default function () {
  const apiRepository = apiRepositoryInit('/api');
  const jwtRepository = jwtRepositoryInit();
  const jwtService = jwtServiceInit(jwtRepository);
  const userService = userServiceInit(jwtService, apiRepository);
  return {
    jwtService,
    userService,
  };
}
