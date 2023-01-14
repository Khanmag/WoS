import {followAPI, usersAPI} from "../API/apiRequests";
import {updateObjPropInArray} from "../helperFuncs/objectsInArray";

let SET_USERS = 'usersReducer/SET_USERS'
let SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT'
let SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE'
let TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING'
let DO_IS_FETCHING_TRUE = 'usersReducer/DO_IS_FETCHING_TRUE'
let DO_IS_FETCHING_FALSE = 'usersReducer/DO_IS_FETCHING_FALSE'
let SET_HAVE_ERROR = 'usersReducer/SET_HAVE_ERROR'
let FOLLOW_ON_USER = 'usersReducer/FOLLOW_ON_USER'
let UNFOLLOW_ON_USER = 'usersReducer/UNFOLLOW_ON_USER'
let DISABLE_CURRENT_BUTTON = 'usersReducer/DISABLE_CURRENT_BUTTON'
let ENABLE_CURRENT_BUTTON = 'usersReducer/ENABLE_CURRENT_BUTTON'
let SET_INITIALIZING_STATUS = 'usersReducer/SET_INITIALIZING_STATUS'

let initialState = {
    users: [],
    pageSize: 24,
    totalUsersCount: null,
    currentPage: 1,
    isUsersFetching: false,
    followingOnProcess: [],
    hasError: false,
    initialized: false,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users].sort((p, n) => p.id - n.id)}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        //
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        //
        case SET_INITIALIZING_STATUS:
            return {...state, initialized: action.initialized}
        //
        case TOGGLE_IS_FETCHING:
            return {...state, isUsersFetching: !state.isUsersFetching}
        case DO_IS_FETCHING_TRUE:
            return {...state, isUsersFetching: true}
        case DO_IS_FETCHING_FALSE:
            return {...state, isUsersFetching: false}
        //
        case SET_HAVE_ERROR:
            return {...state, hasError: true}
        case FOLLOW_ON_USER:
            return {
                ...state,
                users: updateObjPropInArray(state.users, 'id', action.userId, {followed: true}),
            }
        case UNFOLLOW_ON_USER:
            return {
                ...state,
                users: updateObjPropInArray(state.users, 'id', action.userId, {followed: false}),
            }
        case DISABLE_CURRENT_BUTTON:
            return {...state, followingOnProcess: [...state.followingOnProcess, action.userId]}
        case ENABLE_CURRENT_BUTTON:
            return {...state, followingOnProcess: state.followingOnProcess.filter(item => item !== action.userId)}
        default:
            return state
    }
}

export const setUsers = (users) => ( {type: SET_USERS, users} )
export const setTotalUsersCount = (count) => ( {type: SET_TOTAL_USERS_COUNT, count} )
export const setCurrentPage = (currentPage) => ( {type: SET_CURRENT_PAGE, currentPage} )

export const followOnUser = (userId) => ({type: FOLLOW_ON_USER, userId})
export const unfollowOnUser = (userId) => ({type: UNFOLLOW_ON_USER, userId})

export const toggleIsFetching = () => ({type: TOGGLE_IS_FETCHING})
const setIsFetchingTrue = () => ({type: DO_IS_FETCHING_TRUE})
const setIsFetchingFalse = () => ({type: DO_IS_FETCHING_FALSE})

export const setInitializingStatus = (status) => ({type: SET_INITIALIZING_STATUS, initialized: status})

const setHaveError = () => ({type: SET_HAVE_ERROR})

export const disableCurrentButton = (userId) => {
    return {type: DISABLE_CURRENT_BUTTON, userId}
}
export const enableCurrentButton = (userId) => {
    return {type: ENABLE_CURRENT_BUTTON, userId}
}

export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(setIsFetchingTrue())
    let response = await usersAPI.getUsers(currentPage, pageSize)
    console.log(response)
    if (!response.data.error) {
        dispatch(setUsers(response.data.items));
        dispatch(setIsFetchingFalse());
        dispatch(setTotalUsersCount(response.data.totalCount))
    } else {
        dispatch(setHaveError())
    }
    dispatch(setInitializingStatus(true))
}
export const followThunk = (id) => async (dispatch) => {
    dispatch(disableCurrentButton(id))
    let response = await followAPI.follow(id)
    if (response.data.resultCode === 0) {
        dispatch(followOnUser(id))
    }
    dispatch(enableCurrentButton(id))
}
export const unfollowThunk = (id) => async (dispatch) => {
    dispatch(disableCurrentButton(id))
    let response = await followAPI.unfollow(id)
    if (response.data.resultCode === 0) {
        dispatch(unfollowOnUser(id))
    }
    dispatch(enableCurrentButton(id))
}


export default userReducer