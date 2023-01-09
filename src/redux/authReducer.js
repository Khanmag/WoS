import {authAPI, securityAPI} from "../API/apiRequests";

let SET_AUTH_USER = 'authReducer/SET_AUTH_USER'
let RESET_AUTH_USER = 'authReducer/RESET_AUTH_USER'
let SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL'

let initialState = {
    id: null,
    login: null,
    email: null,
    isAuth: false,
    captchaURL: null,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {...state, ...action.data, isAuth: true}
        case RESET_AUTH_USER:
            return {...state, id: null, login: null, email: null, isAuth: false}
        case SET_CAPTCHA_URL:
            console.log(action.captchaURL)
            return {...state, captchaURL: action.captchaURL}
        default:
            return state
    }
}

export const setAuthUser = (id, login, email) => ({type: SET_AUTH_USER, data: {id, login, email}})
export const resetAuthUser = () => ({type: RESET_AUTH_USER})
export const setCaptchaURL = (captchaURL) => ({type: SET_CAPTCHA_URL, captchaURL})

export const getAuthUserInfo = () => async (dispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(setAuthUser(id, login, email))
    }
}

export const userLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
    console.log(response.data)
    if (response.data.resultCode === 0) {
        dispatch(getAuthUserInfo())
    } else if (response.data.resultCode === 10) {
        dispatch(getCaptcha())
    }
}

export const userLogout = () => async (dispatch) => {
    let response = await authAPI.logout()
    if (response.data.resultCode === 0) {
        dispatch(resetAuthUser())
    }
}

export const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha()
    const captchaURL = response.data.url
    console.log('captchaURL')
    dispatch(setCaptchaURL(captchaURL))
}

export default authReducer