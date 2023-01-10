import {authAPI, securityAPI} from "../API/apiRequests";
import {getProfile, getProfilePhoto} from "./profileReducer";
import defaultPhoto from '../localImage/defaultUser.png'

let SET_AUTH_USER = 'authReducer/SET_AUTH_USER'
let RESET_AUTH_USER = 'authReducer/RESET_AUTH_USER'
let SET_CAPTCHA_URL = 'authReducer/SET_CAPTCHA_URL'
let SET_PROFILE_PHOTOS = 'authReducer/SET_PROFILE_PHOTOS'



let initialState = {
    id: null,
    login: null,
    email: null,
    photos: {
        small: defaultPhoto,
        large: defaultPhoto,
    },
    isAuth: false,
    captchaURL: null,
}


const authReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_AUTH_USER:
            return {...state, ...action.data, isAuth: true}
        case RESET_AUTH_USER:
            return {...state, id: null, login: null, email: null, isAuth: false, photos: {small: null, large: null}}
        case SET_CAPTCHA_URL:
            console.log(action.captchaURL)
            return {...state, captchaURL: action.captchaURL}
        case SET_PROFILE_PHOTOS:
            return {...state, photos: action.photos}
        default:
            return state
    }
}

export const setAuthUser = (id, login, email) => ({type: SET_AUTH_USER, data: {id, login, email}})
export const resetAuthUser = () => ({type: RESET_AUTH_USER})
export const setCaptchaURL = (captchaURL) => ({type: SET_CAPTCHA_URL, captchaURL})
export const setProfilePhoto = (photos) => ({type: SET_PROFILE_PHOTOS, photos})

export const getAuthUserInfo = () => async (dispatch) => {
    let data = await authAPI.authMe()
    if (data.resultCode === 0) {
        let {id, login, email} = data.data;
        dispatch(getProfile(id))
        dispatch(setAuthUser(id, login, email))
        dispatch(getProfilePhoto(id,setProfilePhoto))
    }
}

export const userLogin = (email, password, rememberMe) => async (dispatch) => {
    let response = await authAPI.login(email, password, rememberMe)
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