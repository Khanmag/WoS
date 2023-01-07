import {authAPI} from "../API/apiRequests";

let SET_AUTH_USER = 'authReducer/SET_AUTH_USER'
let RESET_AUTH_USER = 'authReducer/RESET_AUTH_USER'

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
        case RESET_AUTH_USER:
            return {...state, id: null, login: null, email: null, isAuth: false}
        default:
            return state
    }
}

export const setAuthUser = (id, login, email) => ({type: SET_AUTH_USER, data: {id, login, email}})
export const resetAuthUser = () => ({type: RESET_AUTH_USER})

export const getAuthUserInfo = () => async (dispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUser(id, login, email))
    }
}

export const userLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserInfo())
    }
}

export const userLogout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(resetAuthUser())
    }
}

export default authReducer