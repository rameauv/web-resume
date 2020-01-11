const initService = (jwtService, apiRepository) => {
  const getUserDataAsync = async (userId) => apiRepository.getUserDataAsync(userId);

  const getMyUserDataAsync = async () => {
    const token = await jwtService.getTokenAsync();
    return apiRepository.getMyUserDataAsync(token);
  };

  const loginAsync = async (credentials) => apiRepository.loginAsync(credentials);

  return {
    getUserDataAsync,
    getMyUserDataAsync,
    loginAsync,
  };
};

export default initService;
