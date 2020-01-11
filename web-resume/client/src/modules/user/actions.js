const initActions = (types) => {
  const fetchAction = (payload) => (dispatch) => {
    dispatch({
      type: types.USER_FETCH_USERDATA,
      payload,
    });
  };

  const loginAction = (payload) => (dispatch) => {
    dispatch({
      type: types.USER_LOGIN,
      payload,
    });
  };

  const refreshLoggedUserAction = () => (dispatch) => {
    dispatch({
      type: types.USER_AUTOLOGIN,
      payload: null,
    });
  };

  const logoutAction = () => (dispatch) => {
    dispatch({
      type: types.USER_LOGOUT,
      payload: null,
    });
  };

  return {
    fetchAction, loginAction, refreshLoggedUserAction, logoutAction,
  };
};

export default initActions;
