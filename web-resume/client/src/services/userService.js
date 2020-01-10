const initService = (jwtService, apiRepository) => {
  const getUserDataAsync = async (userId) => {
    return apiRepository.getUserDataAsync(userId);
  };

  const getMyUserDataAsync = async () => {
    const token = await jwtService.getTokenAsync();
    return apiRepository.getMyUserDataAsync(token);
  };

  const loginAsync = async (credentials) => {
    return apiRepository.loginAsync(credentials);
  };

  return {
    getUserDataAsync,
    getMyUserDataAsync,
    loginAsync,
  };
};

export default initService;
