export default (state, action) => {
    console.log(action);
    switch (action.type) {
        case "USER_FETCH_FULFILLED":
            return {
                ...state,
                fetchedUser: action.payload
            };
        case "USER_LOGIN_FULFILLED":
            return {
                ...state,
                user: action.payload,
                loginState: "SUCCESS"
            };
        case "USER_LOGIN_REJECTED":
            return {
                ...state,
                loginState: "FAILED"
            };
        case "USER_LOGOUT":
            return {
                ...state,
                user: null
            };
        default:
            return { ...state };
    }
};