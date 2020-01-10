const initActions = (types) => {
  const fetchAction = (payload) => {
    return (dispatch) => {
      dispatch({
        type: types.USER_FETCH_USERDATA,
        payload,
      });
    };
  };

  const loginAction = (payload) => {
    return (dispatch) => {
      dispatch({
        type: types.USER_LOGIN,
        payload,
      });
    };
  };

  const refreshLoggedUserAction = () => {
    return (dispatch) => {
      dispatch({
        type: types.USER_AUTOLOGIN,
        payload: null,
      });
    };
  };

  const logoutAction = () => {
    return (dispatch) => {
      dispatch({
        type: types.USER_LOGOUT,
        payload: null,
      });
    };
  };

  return {
    fetchAction, loginAction, refreshLoggedUserAction, logoutAction,
  };
};

export default initActions;
