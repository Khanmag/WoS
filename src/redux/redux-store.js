import {combineReducers, createStore, applyMiddleware} from "redux";
import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";
import userReducer from "./userReducer";
import authReducer from "./authReducer";
import thunkMiddleware from 'redux-thunk'
// import {reducer as formReducer} from 'react-final-form'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    usersPage: userReducer,
    authData: authReducer,
    // form: formReducer
})

let store = createStore(reducers, applyMiddleware(thunkMiddleware))

export default store