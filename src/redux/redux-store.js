import {combineReducers, createStore, applyMiddleware, compose} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
import appReducer from "./appReducer";

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    authData: authReducer,
    app: appReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// + const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
//     - const store = createStore(reducer, /* preloadedState, */ compose(
//     applyMiddleware(...middleware)
// ));
let store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)))

export default store