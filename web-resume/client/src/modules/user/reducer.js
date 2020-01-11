const initReducer = (types) => (state, action) => {
  switch (action.type) {
    case types.USER_FETCH_USERDATA_FULFILLED:
      return {
        ...state,
        fetchedUser: action.payload,
      };
    case types.USER_LOGIN_FULFILLED:
      return {
        ...state,
        user: action.payload,
        loginState: 'SUCCESS',
      };
    case types.USER_LOGIN_REJECTED:
      return {
        ...state,
        loginState: 'FAILED',
      };
    case types.USER_LOGOUT:
      return {
        ...state,
        user: null,
      };
    default:
      return { ...state };
  }
};

export default initReducer;
