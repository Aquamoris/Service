import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import thunk from "redux-thunk";
import headerReducer from "./header-reducer";
import usersReducer from "./users-reducer";
import authReducer from "./auth-reducer";
import companiesReducer from "./companies-reducer";
import vacanciesReducer from "./vacansies-reducer";
import tagsReducer from "./tags-reducer";
import resumesReducer from "./resumes-reducer";

let reducers = combineReducers({
    header: headerReducer,
    usersData: usersReducer,
    companiesData: companiesReducer,
    vacanciesData: vacanciesReducer,
    resumesData: resumesReducer,
    tagsData: tagsReducer,
    authData: authReducer
});

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;