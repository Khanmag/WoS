import {profileAPI} from "../API/apiRequests";
import defaultImage from '../localImage/defaultUser.png'

let ADD_NEW_POST = 'ADD_NEW_POST'
let CHANGE_NEW_POST_TEXT = 'CHANGE_NEW_POST_TEXT'
let SET_PROFILE_INFO = 'SET_PROFILE_INFO'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let SET_STATUS = 'SET_STATUS'
let SAVE_PHOTOS_SUCCESS = 'profile/SAVE_PHOTOS_SUCCESS'

const initialState = {
    profileInfo: {
        userId: null,
        fullName: 'guest',
        photos: {
            small: defaultImage,
            large: defaultImage,
        },
        contacts: {
            facebook: null,
            website: null,
            vk: 'vk.com/dimych',
            twitter: 'https://twitter.com/@sdf',
            instagram: 'instagram.com/sds',
            youtube: null,
            github: null,
            mainLink: null,
        }
    },
    // profileInfo: null,
    profileStatus: '',
    posts: [
        {id: '1', text: 'HTML user'},
        {id: '2', text: 'CSS master'},
        {id: '3', text: 'JS is my kung-fu'},
        {id: '1', text: 'I am React GOD!!'},
    ],
    isFetching: false,
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_POST:
            let newPost = {
                id: '5',
                text: action.text,
            }
            return {...state, posts: [...state.posts, newPost]}
        case CHANGE_NEW_POST_TEXT:
            return {...state, newPostText: action.text}
        case SET_PROFILE_INFO:
            return {...state, profileInfo: {...action.profileInfo}}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetching: !state.isFetching}
        case SET_STATUS:
            return {...state, profileStatus: action.text}
        case SAVE_PHOTOS_SUCCESS:
            return {...state, profileInfo: {...state.profileInfo, photos: action.photos}}
        default:
            return state
    }

}

export const addNewPost = (text) => {
    return {type: ADD_NEW_POST, text}
}

export const setProfileInfo = (profileInfo) => {
    return {
        type: SET_PROFILE_INFO,
        profileInfo: profileInfo,
    }
}
export const setStatus = (text) => {
    return {
        type: SET_STATUS,
        text: text,
    }
}
export const toggleIsFetching = () => {
    return {type: TOGGLE_IS_FETCHING}
}
export const savePhotosSuccess = (photos) => {
    return {type: SAVE_PHOTOS_SUCCESS, photos}
}

export const getProfile = (id) => {
    return (dispatch) => {
        profileAPI.getUserProfile(id).then(data => {
            dispatch(setProfileInfo(data))
            dispatch(toggleIsFetching())
        })
    }
}
export const getProfilePhoto = (id, action) => {
    return (dispatch) => {
        profileAPI.getUserProfile(id).then(data => {
            dispatch(action(data.photos))
        })
    }
}
export const getStatus = (id) => {
    return (dispatch) => {
        profileAPI.getStatus(id).then(data => {
            dispatch(setStatus(data))
        })
    }
}
export const updateStatus = (text) => {
    return (dispatch) => {
        profileAPI.updateStatus(text).then(response => {
            if (response.data.resultCode === 0) {
                console.log('status request  ')
                console.log(response.data)
                dispatch(setStatus(text))
            }
        })
    }
}
export const updatePhoto = (photoFile) => async (dispatch) => {
    let response = await profileAPI.updatePhoto(photoFile)
    dispatch(savePhotosSuccess(response.data.data.photos))
}
export const saveProfileData = (profileData) => async (dispatch) => {
    let response = await profileAPI.saveProfileData(profileData)
    console.log('response: ',response.data)
    if (response.data.resultCode === 0) {
        dispatch(getProfile(profileData.userId))
    }

}


export default profileReducer