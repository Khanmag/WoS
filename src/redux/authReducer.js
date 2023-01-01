import {authAPI} from "../API/apiRequests";

let SET_AUTH_USER = 'SET_AUTH_USER'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {...state, ...action.data, isAuth: true}
        default:
            return state
    }
}

export const setAuthUser = (id, login, email) => ({type: SET_AUTH_USER, data: {id, login, email}})

export const getAuthUserInfo = () => {
    return (dispatch) => {
        authAPI.authMe().then(data => {
            if (data.resultCode === 0) {
                let {id, login, email} = data.data;
                dispatch(setAuthUser(id, login, email))
            }
        })
    }
}

export default authReducer