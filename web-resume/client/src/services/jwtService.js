const initService = (jwtRepository) => {
  const getTokenAsync = async () => jwtRepository.getTokenAsync();

  const setTokenAsync = async (token) => jwtRepository.setTokenAsync(token);

  const clearAsync = async () => jwtRepository.clearAsync();
  return {
    getTokenAsync,
    setTokenAsync,
    clearAsync,
  };
};

export default initService;
