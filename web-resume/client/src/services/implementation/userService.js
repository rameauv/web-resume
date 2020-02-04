import { IUserService } from '../IUserService';
import { User } from '../../model/User';

const initService = (jwtService, apiRepository): IUserService => {
  const getUserDataAsync = async (userId) => apiRepository.getUserDataAsync(userId);

  const getMyUserDataAsync = async () => {
    const token = await jwtService.getTokenAsync();
    return apiRepository.getMyUserDataAsync(token);
  };

  const loginAsync = async (credentials) => apiRepository.loginAsync(credentials);

  const fetchUsersByQuery = async (query: string) => {
    const result: User[] = [
      new User({
        userid: 'username',
        firstname: 'valentin',
        lastname: 'rameau',
      }),
      new User({
        userid: 'jeanlouis',
        firstname: 'jean-louis',
        lastname: 'la chaussette',
      }),
    ];
    return apiRepository.searchAsync(query);
  };

  return {
    getUserDataAsync,
    getMyUserDataAsync,
    loginAsync,
    fetchUsersByQuery,
  };
};

export default initService;
