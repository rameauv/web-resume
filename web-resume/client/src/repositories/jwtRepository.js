const initRepository = () => {
  const getTokenAsync = () => {
    return (
      new Promise((resolve, reject) => {
        var token = localStorage.getItem('token');
        resolve(token);
      })
    );
  };

  const setTokenAsync = (token) => {
    return (
      new Promise((resolve, reject) => {
        localStorage.setItem('token', token);
        resolve();
      })
    );
  };

  const clearAsync = () => {
    return (
      new Promise((resolve, reject) => {
        localStorage.clear('token');
        resolve();
      })
    );
  };

  return {
    getTokenAsync,
    setTokenAsync,
    clearAsync,
  };
}

export default initRepository;