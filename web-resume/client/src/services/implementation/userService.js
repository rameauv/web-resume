import { IUserService } from '../IUserService';

const initService = (jwtService, apiRepository): IUserService => {
  const getUserDataAsync = async (userId) => apiRepository.getUserDataAsync(userId);

  const getMyUserDataAsync = async () => {
    const token = await jwtService.getTokenAsync();
    return apiRepository.getMyUserDataAsync(token);
  };

  const loginAsync = async (credentials) => apiRepository.loginAsync(credentials);

  const fetchUsersByQuery = async (query: string) => ([]);

  return {
    getUserDataAsync,
    getMyUserDataAsync,
    loginAsync,
    fetchUsersByQuery,
  };
};

export default initService;
