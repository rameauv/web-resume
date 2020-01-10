const initMiddleware = (types, services) => {
  const { userService, jwtService } = services;
  const fetch = (store) => (next) => (action) => {
    next(action);
    if (action.type !== types.USER_FETCH_USERDATA) {
      return;
    }
    const { userId } = action.payload;
    const { dispatch } = store;
    userService.getUserDataAsync(userId).then((res) => {
      if (!res) {
        dispatch({
          type: types.USER_FETCH_USERDATA_REJECTED,
          payload: null,
        });
        return;
      }
      dispatch({
        type: types.USER_FETCH_USERDATA_FULFILLED,
        payload: res,
      });
    }).catch(() => {
      dispatch({
        type: types.USER_FETCH_USERDATA_REJECTED,
        payload: null,
      });
    });
  };

  const login = (store) => (next) => (action) => {
    next(action);
    if (action.type !== types.USER_LOGIN) {
      return;
    }
    const { payload } = action;
    const { dispatch } = store;
    userService.loginAsync(payload).then((res) => {
      if (res.success) {
        jwtService.setTokenAsync(res.token).catch(() => {
          dispatch({
            type: types.USER_LOGIN_REJECTED,
            payload: null,
          });
        });
        dispatch({
          type: types.USER_LOGIN_FULFILLED,
          payload: res.userDatas,
        });
        return;
      }
      dispatch({
        type: types.USER_LOGIN_REJECTED,
        payload: null,
      });
    }).catch(() => {
      dispatch({
        type: types.USER_LOGIN_REJECTED,
        payload: null,
      });
    });
  };

  const refreshLoggedUser = (store) => (next) => (action) => {
    next(action);
    if (action.type !== types.USER_AUTOLOGIN) {
      return;
    }
    const { dispatch } = store;
    userService.getMyUserDataAsync().then((res) => {
      dispatch({
        type: types.USER_LOGIN_FULFILLED,
        payload: res,
      });
    }).catch((e) => {
      dispatch({
        type: types.USER_LOGIN_REJECTED,
        payload: e,
      });
    });
  };

  const logout = () => (next) => async (action) => {
    next(action);
    if (action.type !== types.USER_LOGOUT) {
      return;
    }
    await jwtService.clearAsync();
  };
  return [fetch, login, refreshLoggedUser, logout];
};

export default initMiddleware;
