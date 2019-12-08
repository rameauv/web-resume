import { createStore, applyMiddleware } from "redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import userMainReducer from "./reducers/userMainReducer";

function configureStore(store = {
    loginState: "NO",
    rotating: true,
    user: null,
    fetchedUser: null
}) {
    const middleware = applyMiddleware(thunk, logger);
    return createStore(userMainReducer, store, middleware);
}
export default configureStore;