export interface IUserService {
  getUserDataAsync: (string) => Promise<any>;
  getMyUserDataAsync: () => Promise<any>;
  loginAsync: (any) => Promise<any>;
  fetchUsersByQuery: (string) => Promise<Array>;
}
