import { ApiService } from "../utils/apiService";
import { JwtService } from "../utils/jwtService";

const apiService = new ApiService(null);
const jwtService = new JwtService();

export const fetchAction = (payload) => {
    return function (dispatch) {
        const userId = payload.userId;
        apiService.getUserDatas(userId).then((res) => {
            if (!res) {
                dispatch({
                    type: "USER_FETCH_REJECTED",
                    payload: null
                })
                return;
            }
            dispatch({
                type: "USER_FETCH_FULFILLED",
                payload: res
            })
        }).catch(() => {
            dispatch({
                type: "USER_FETCH_REJECTED",
                payload: null
            });
        });
    }
}

export const loginAction = (payload) => {
    return function (dispatch) {
        apiService.login(payload.username, payload.password).then((res) => {
            if (res.success) {
                jwtService.setToken(res.token)
                dispatch({
                    type: "USER_LOGIN_FULFILLED",
                    payload: res.userDatas
                });
                return;
            }
            dispatch({
                type: "USER_LOGIN_REJECTED",
                payload: null
            });
        }).catch(() => {
            dispatch({
                type: "USER_LOGIN_REJECTED",
                payload: null
            });
        });
    }
}

export const refreshLoggedUserAction = () => {
    return function (dispatch) {
        jwtService.getToken().then((token) => {
            apiService.getMyUserDatas(token).then((res) => {
                dispatch({
                    type: "USER_LOGIN_FULFILLED",
                    payload: res
                });
            }).catch((e) => {
                dispatch({
                    type: "USER_LOGIN_REJECTED",
                    payload: e
                });
            });
        }).catch((e) => {
            dispatch({
                type: "USER_LOGIN_REJECTED",
                payload: e
            });
        });
    }
}

export const logoutAction = () => {
    return function (dispatch) {
        jwtService.clear();
        dispatch({
            type: "USER_LOGOUT",
            payload: null
        });
    }
}