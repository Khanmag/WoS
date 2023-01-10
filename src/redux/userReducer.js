import {followAPI, usersAPI} from "../API/apiRequests";
import {updateObjPropInArray} from "../helperFuncs/objectsInArray";

let SET_USERS = 'usersReducer/SET_USERS'
let SET_TOTAL_USERS_COUNT = 'usersReducer/SET_TOTAL_USERS_COUNT'
let SET_CURRENT_PAGE = 'usersReducer/SET_CURRENT_PAGE'
let TOGGLE_IS_FETCHING = 'usersReducer/TOGGLE_IS_FETCHING'
let FOLLOW_ON_USER = 'usersReducer/FOLLOW_ON_USER'
let UNFOLLOW_ON_USER = 'usersReducer/UNFOLLOW_ON_USER'
let DISABLE_CURRENT_BUTTON = 'usersReducer/DISABLE_CURRENT_BUTTON'
let ENABLE_CURRENT_BUTTON = 'usersReducer/ENABLE_CURRENT_BUTTON'

let initialState = {
    users: [],
    pageSize: 24,
    totalUsersCount: null,
    currentPage: 1,
    isFetchingProfile: false,
    followingOnProcess: [],
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_USERS:
            return {...state, users: [...action.users].sort((p, n) => p.id - n.id)}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        case TOGGLE_IS_FETCHING:
            return {...state, isFetchingProfile: !state.isFetchingProfile}
        case FOLLOW_ON_USER:
            return {
                ...state,
                users: updateObjPropInArray(state.users, 'id', action.userId, {followed: true}),
                // users: state.users.map(item => {
                //     if (item.id === action.userId) {
                //         return {...item, followed: true}
                //     }
                //     return item
                // }),
            }
        case UNFOLLOW_ON_USER:
            return {
                ...state,
                users: updateObjPropInArray(state.users, 'id', action.userId, {followed: false}),
                // users: state.users.map(item => {
                //     if (item.id === action.userId) {
                //         return {...item, followed: false}
                //     }
                //     return item
                // })
            }
        case DISABLE_CURRENT_BUTTON:
            return {...state, followingOnProcess: [...state.followingOnProcess, action.userId]}
        case ENABLE_CURRENT_BUTTON:
            return {...state, followingOnProcess: state.followingOnProcess.filter(item => item !== action.userId)}
        default:
            return state
    }
}

export const setUsers = (users) => {
    return {type: SET_USERS, users}
}
export const setTotalUsersCount = (count) => {
    return {type: SET_TOTAL_USERS_COUNT, count}
}
export const setCurrentPage = (currentPage) => {
    return {type: SET_CURRENT_PAGE, currentPage}
}
export const followOnUser = (userId) => {
    return {type: FOLLOW_ON_USER, userId}
}
export const unfollowOnUser = (userId) => {
    return {type: UNFOLLOW_ON_USER, userId}
}
export const toggleIsFetching = () => {
    return {type: TOGGLE_IS_FETCHING}
}
export const disableCurrentButton = (userId) => {
    return {type: DISABLE_CURRENT_BUTTON, userId}
}
export const enableCurrentButton = (userId) => {
    return {type: ENABLE_CURRENT_BUTTON, userId}
}

export const getUsersThunk = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching())
    let response = await usersAPI.getUsers(currentPage, pageSize)
    dispatch(setUsers(response.data.items));
    dispatch(toggleIsFetching());
    dispatch(setTotalUsersCount(response.data.totalCount))
    // console.log(response.data.totalCount)
}
export const followThunk = (id) => async (dispatch) => {
    dispatch(disableCurrentButton(id))
    let response = await followAPI.follow(id)
    // console.log(response)
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