import {combineReducers, legacy_createStore as createStore} from "redux";
import headerReducer from "./headerReducer";

let reducers = combineReducers({
    header: headerReducer,
});

let store = createStore(reducers);

export default store;