import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import headerReducer from "./header-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";

let reducers = combineReducers({
    header: headerReducer,
    usersData: usersReducer,
    authData: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

export default store;