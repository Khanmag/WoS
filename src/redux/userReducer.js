let TOGGLE_FOLLOWING = 'TOGGLE_FOLLOWING'
let SET_USERS = 'SET_USERS'
let SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
let SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'

let initialState = {
    users: [],
    pageSize: 8,
    totalUsersCount: 50,
    currentPage: 1,
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case TOGGLE_FOLLOWING:
            let allAnother = state.users.filter((i) => i.id != action.id)
            let myUser = state.users.filter((i) => i.id == action.id)[0]
            let currentFollow = myUser.followed
            return {
                ...state,
                users: [...allAnother,
                    {...myUser, followed: !currentFollow}].sort((p, n) => p.id - n.id)
            }
        case SET_USERS:
            return {...state, users: [...action.users].sort((p, n) => p.id - n.id)}
        case SET_TOTAL_USERS_COUNT:
            return {...state, totalUsersCount: action.count}
        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.currentPage}
        default:
            return state
    }
}

export const toggleFollowingAC = (id) => {
    return {
        type: TOGGLE_FOLLOWING,
        id: id
    }
}
export const setUsersAC = (users) => {
    return {
        type: SET_USERS,
        users: users,
    }
}
export const setTotalUsersCountAC = (count) => {
    return {
        type: SET_TOTAL_USERS_COUNT,
        count: count
    }
}
export const setCurrentPageAC = (currentPage) => {
    return {
        type: SET_CURRENT_PAGE,
        currentPage: currentPage,
    }
}

export default userReducer