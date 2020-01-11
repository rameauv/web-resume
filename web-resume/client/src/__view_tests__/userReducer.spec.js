import initReducer from '../modules/user/reducer';
import types from '../modules/user/types';

describe('\'user main\' reducer', () => {
  it('should return new state when receiving type \'USER_FETCH_FULFILLED\'', () => {
    const payload = 'myPayload';
    const action = {
      type: types.USER_FETCH_USERDATA_FULFILLED,
      payload,
    };
    const newState = initReducer(types)(undefined, action);
    expect(newState.fetchedUser).toEqual(payload);
  });
  it('should return new state when receiving type \'USER_LOGIN_FULFILLED\'', () => {
    const payload = 'myPayload';
    const action = {
      type: types.USER_LOGIN_FULFILLED,
      payload,
    };
    const newState = initReducer(types)(undefined, action);
    const expectedLoginState = 'SUCCESS';
    expect(newState.user).toEqual(payload);
    expect(newState.loginState).toEqual(expectedLoginState);
  });
  it('should return new state when receiving type \'USER_LOGIN_REJECTED\'', () => {
    const action = {
      type: types.USER_LOGIN_REJECTED,
    };
    const newState = initReducer(types)(undefined, action);
    const expectedLoginState = 'FAILED';
    expect(newState.user).toEqual(undefined);
    expect(newState.loginState).toEqual(expectedLoginState);
  });
  it('should return new state when receiving type \'USER_LOGOUT\'', () => {
    const action = {
      type: types.USER_LOGOUT,
    };
    const newState = initReducer(types)(undefined, action);
    expect(newState.user).toEqual(null);
  });
});
