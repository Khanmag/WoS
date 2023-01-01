import {followAPI, usersAPI} from "../API/apiRequests";

let SET_USERS = 'SET_USERS'
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
let TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
let FOLLOW_ON_USER = 'FOLLOW_ON_USER'
let UNFOLLOW_ON_USER = 'UNFOLLOW_ON_USER'
let FOLLOWING_ON_PROGRESS = 'FOLLOWING_ON_PROGRESS'
let DISABLE_CURRENT_BUTTON = 'DISABLE_CURRENT_BUTTON'
let ENABLE_CURRENT_BUTTON = 'ENABLE_CURRENT_BUTTON'
let CHECK_SHOULD_BE_DISABLED = 'CHECK_SHOULD_BE_DISABLED'

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 50,
    currentPage: 1,
    isFetching: false,
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
            return {...state, isFetching: !state.isFetching}
        case FOLLOW_ON_USER:
            return {
                ...state,
                users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: true}
                    }
                    return item
                }),
            }
        case UNFOLLOW_ON_USER:
            return {
                ...state, users: state.users.map(item => {
                    if (item.id === action.userId) {
                        return {...item, followed: false}
                    }
                    return item
                })
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
    return {
        type: SET_USERS,
        users: users,
    }
}
export const setTotalUsersCount = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: count
    }
}
export const setCurrentPage = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}
export const followOnUser = (userId) => {
    return {
        type: FOLLOW_ON_USER,
        userId: userId,
    }
}
export const unfollowOnUser = (userId) => {
    return {
        type: UNFOLLOW_ON_USER,
        userId: userId,
    }
}
export const toggleIsFetching = () => {
    return {type: TOGGLE_IS_FETCHING}
}
export const disableCurrentButton = (id) => {
    return {
        type: DISABLE_CURRENT_BUTTON,
        userId: id,
    }
}
export const enableCurrentButton = (id) => {
    return {
        type: ENABLE_CURRENT_BUTTON,
        userId: id,
    }
}
export const checkShouldBeDisabled = (id) => {
    return {
        type: CHECK_SHOULD_BE_DISABLED,
        userId: id,
    }
}

export const getUsersThunk = (currentPage, pageSize) => {
    return (dispatch) => {
        dispatch(toggleIsFetching())
        usersAPI.getUsers(currentPage, pageSize)
            .then(data => {
                dispatch(setUsers(data.items));
                dispatch(toggleIsFetching());
                // dispatch(setTotalUsersCount(response.data.totalCount))
            })
    }
}

export const followThunk = (id) => {
    return (dispatch) => {
        dispatch(disableCurrentButton(id))
        followAPI.follow(id).then( data => {
            if (data.resultCode === 0) {
                dispatch(followOnUser(id))
            }
            dispatch(enableCurrentButton(id))
        })
    }
}
export const unfollowThunk = (id) => {
    return (dispatch) => {
        dispatch(disableCurrentButton(id))
        followAPI.unfollow(id).then( data => {
            if (data.resultCode === 0) {
                dispatch(unfollowOnUser(id))
            }
            dispatch(enableCurrentButton(id))
        })
    }
}



export default userReducer