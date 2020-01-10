const initService = (jwtRepository) => {
  const getTokenAsync = async () => {
    return await jwtRepository.getTokenAsync();
  };

  const setTokenAsync = async (token) => {
    return await jwtRepository.setTokenAsync(token);
  };

  const clearAsync = async () => {
    return await jwtRepository.clearAsync();
  };
  return {
    getTokenAsync,
    setTokenAsync,
    clearAsync,
  };
};

export default initService;