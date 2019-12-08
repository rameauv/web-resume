export default (state, action) => {
    switch (action.type) {
        case "ROTATE":
            return {
                rotating: action.payload
            };
        default:
            return state;
    }
};