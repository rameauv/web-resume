const initRepository = () => {
  const getTokenAsync = () => (
    new Promise((resolve) => {
      const token = localStorage.getItem('token');
      resolve(token);
    })
  );

  const setTokenAsync = (token) => (
    new Promise((resolve) => {
      localStorage.setItem('token', token);
      resolve();
    })
  );

  const clearAsync = () => (
    new Promise((resolve) => {
      localStorage.clear('token');
      resolve();
    })
  );

  return {
    getTokenAsync,
    setTokenAsync,
    clearAsync,
  };
};

export default initRepository;
